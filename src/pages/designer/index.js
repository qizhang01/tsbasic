import React,{useState,useEffect,useRef,useCallback } from 'react';
import GraphWrapper from './GraphWrapper'
import SiderBarWrapper from './SiderBarWrapper'
import TabBarWrapper from './TabBarWrapper'
import PageDescWrapper from './PageDescWrapper'
import ModalFrame from './ModalFrame'
import { Form,message } from '@components/uis';
import {cloneDeep} from 'lodash';
import {usedata} from './useCustom/usedata'
import {useProperty} from './useCustom/useProperty'
import {modaldefaultData} from './business/modal';
import {CurNodeEdge,protoForEdit,protoForAdd,entityForAddData,entityForAddGraph,
  protoForAddEdit,addNodeEdge,deleteElement,switchChange,graphEmptyStatus} from './business'
import './index.less';

let tempId;  // 选择当前节点 id或者name
let lineStyle = [];     // 线条颜色
let originDataAll = {};     // 画布数据
let graphcurNodeEdge = {}   //当前点击的 画布的节点 ---> graph

const AntVGragh = () => {
  const [form] = Form.useForm();
  let graph = useRef(null);
  let graphEmpty = useRef(null);    // 画布的空态
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentNodeEdge, setCurrentNodeEdge] = useState({});     // 选择当前节点/关系
  const [property, setProperty] = useState([]);     // 属性
  const [addModalData,setModalData] = useState(modaldefaultData)
  // 页面初始化 画布数据 ★★★★★
  const newOriginData = usedata()
 
  useEffect(() => {
    if(graph.current){
      lineStyle = newOriginData.lineSty
      originDataAll = newOriginData.data
      graph.current.read(newOriginData.data)
      console.groupEnd(newOriginData, 111111111)
      // if(!originDataAll.nodes && !originDataAll.nodes.length){
      //   graphEmptyStatus(graphEmpty.current, handAddNodeEdge)
      // }
    }
  }, [newOriginData.data,newOriginData.lineSty])

  // 新建实体、关系、表，添加属性，>>关闭弹框<<
  const handModalCancel = useCallback(() => {
    form.resetFields()
    setIsModalVisible(false);
  },[])

  // 新建实体、关系、表 >>弹框确定<<  isPrototype判断添加的是属性还是实体
  const handModalOk = (type, isPrototype, isEdit) => {
    let originData = cloneDeep(originDataAll);
    form.validateFields().then(values => {
      if(isPrototype){
        // 属性编辑
        if(isEdit){
          let resData = protoForEdit(property, values)
          setProperty([...resData])
        }else {
          // 添加属性
          let resData = protoForAdd(property, values)
          setProperty([...resData])
        }
      }else {
        // 给数据
        let newObj = entityForAddData(values,type)
        // 给图表
        let model = entityForAddGraph(values,type)
        if(type !== 3){
          originData.nodes.push(newObj)
        }else {
          originData.edges.push(newObj)
        }
        // 保存修改后的数据
        originDataAll = originData
        graph.current.addItem('node', model)
      }
      
      form.resetFields()
      setIsModalVisible(false);
    })
  };

  // 添加 / 编辑 属性 >>打开弹框<<
  const handAddProperty = (type, record) => {
    let resData = protoForAddEdit(type,record)
    setModalData(resData)
    // 编辑进入
    if(record){
      form.setFieldsValue({
        protoName: record.name,
        protoType: record.type,
        showName: record.showName
      })
    }
    setIsModalVisible(true);
  }

  // 新建实体类型 关系类型 表类型, >>打开弹框<<
  const handAddNodeEdge = useCallback((type) => {
    let resData = addNodeEdge(type)
    setModalData(resData)
    setIsModalVisible(true);
  },[])

  // 删除属性
  const handDelProperty = useCallback((type, record) => {
    const resData = property.filter(item => item.type.name !== record.name)
    setProperty([...resData])
  },[property])

  // 删除nodes / edges
  const handDelNodeEdge = (node) => {
    let isDelete = false;
    if(node.typeId !== 3){
      let allEdges = graph.current.getEdges();
      isDelete = allEdges.some(item => {
        
        if(
          item._cfg.model.source === node.name || 
          item._cfg.model.target === node.name || 
          item._cfg.model.source === node.eleId || 
          item._cfg.model.target === node.eleId
        ){
          return true;
        }
      })
    }
    if(isDelete){
      message.warning('请先解除其他关系！');
    }else {
      deleteElement()
    }
  }

  // 切换
  const handSwitchChange = useCallback((key, record, checked) => {
    let resData = switchChange(property, key, record)
    setProperty([...resData])
  },[property])

  // 获取 当前选中的节点/关系 的数据
  const handSelectNodesEdges = (params, node) => {
    if(params._cfg.model.name === tempId) return;
    tempId = params._cfg.model.name;
    let originData = cloneDeep(originDataAll)

    originData[node].forEach(item => {
      if(item.name === params._cfg.model.name){
        // 添加样式
        item['style'] = {
          stroke: item.style ? item.style.stroke : params._cfg.model.style.stroke
        }
        useProperty(item.eleId).then(res => {
          setProperty(res)
          setCurrentNodeEdge({...item})
        })
      }
    })
    // 保存修改后的数据
    originDataAll = originData
    // 给图表 选中当前
    let graphCur = node === 'nodes' ? graph.current.getNodes() : graph.current.getEdges()
    graphCur.map(item => {
      if(item._cfg.model.name === params._cfg.model.name){
        graphcurNodeEdge = new CurNodeEdge(item)
      }
    });
  }

  const updateGraph = () => {
    // 给图表
    const curNodeColor = graphcurNodeEdge.getInstance().data
    curNodeColor._cfg.model[type] = value
    const item = graph.current.findById(curNodeColor._cfg.id);
    graph.current.updateItem(item, curNodeColor._cfg.model);
  }

  // 获取切换后的  颜色
  const handChangeColor = (typeId, val) => {
    let originData = cloneDeep(originDataAll)

    let element = typeId === 3 ? 'edges' : 'nodes'
    originData[element].forEach(item => {
      if(item.name === currentNodeEdge.name){
        item['style'] = {
          stroke: val
        }
        setCurrentNodeEdge({...item})
      }
    })
    lineStyle.forEach(item => {
      if(item.name === currentNodeEdge.name){
       item.lineColor = val
       window.color = val
      }
    })
    // 保存修改后的数据
    originDataAll = originData
    updateGraph()
  }

  // 监听 右侧属性的name/value变化，并同步到图表中
  const handListenValue = (typeId, value, type) => {
    let originData = cloneDeep(originDataAll)

    let element = typeId === 3 ? 'edges' : 'nodes'
    originData[element].forEach(ele => {
      if(ele.name === currentNodeEdge.name){
        ele[type] = value
        setCurrentNodeEdge({...ele}) // 回填到输入框里
      }
    });
    // 保存修改后的数据
    originDataAll = originData
    updateGraph()
  }

  // 发布
  const handPublish = useCallback(() => {

  },[])

  return (
    <div className="designLayout">
      <TabBarWrapper />
      <div className="graphDesc">
        <SiderBarWrapper 
          handAddNodeEdge={handAddNodeEdge}
          handPublish={handPublish}
        />
        
        <div ref={graphEmpty}></div>
        <GraphWrapper
          graph={graph}
          handAddNodeEdge={handAddNodeEdge}
          handSelectNodesEdges={handSelectNodesEdges}
        >
        </GraphWrapper>
        
        <PageDescWrapper
          property={property}
          nodeData={currentNodeEdge}
          handListenValue={handListenValue}
          handChangeColor={handChangeColor}
          handAddProperty={handAddProperty}
          handDelProperty={handDelProperty}
          handDelNodeEdge={handDelNodeEdge}
          handSwitchChange={handSwitchChange}
        />
      </div>

      <ModalFrame
        form={form}
        isVisible={isModalVisible}
        modalData={addModalData}
        handModalOk={handModalOk}
        handModalCancel={handModalCancel}
      />
    </div>
  )
}

export default AntVGragh
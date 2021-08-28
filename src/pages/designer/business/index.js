import {entityData,tableData,relationshipData,entityDataRight,tableDataRight,relationshipRight} from './modal';
import { Modal } from '@components/uis';
import {cloneDeep} from 'lodash';
// 处理后端数据格式为图表数据格式
export const convertToGraphda = (res, lineStyle) => {
    const data = {
      // 点集
      nodes: [],
      // 边集
      edges: [],
    };
    if(res.nodes){
      res.nodes.map(item => {
        const obj = {}
        obj.id = item.id;
        obj.name = item.name;
        obj.eleId = item.id;
        obj.typeId = item.type;
        obj.label = item.displayName;
        obj.statusType = item.statusType;
        lineStyle.map(iti => {
          if(item.name === iti.name){
            window.color = iti.lineColor
            obj['style'] = {
              stroke: iti.lineColor || '#000'
            }
          }
        })
        data.nodes.push(obj)
      })
    }
    if(res.edges){
      res.edges.forEach(item => {
        const obj = {}
        obj.source = item.fromElementKey
        obj.target = item.toElementKey
        obj.name = item.name
        obj.typeId = item.type;
        obj.eleId = item.id;
        obj.label = item.displayName;
        obj.statusType = item.statusType;
        lineStyle.map(iti => {
          if(item.name === iti.name){
            window.color = iti.lineColor
            obj['style'] = {
              stroke: iti.lineColor
            }
          }
        })
        data.edges.push(obj)
      })
      data.edges.length && data.edges.forEach((item, idx) => {
        for (let i=0; i<data.edges.length; i++) {
          if(item.source === data.edges[i].source && item.target === data.edges[i].target && idx!=i){
            item.type = 'quadratic';
            item.curveOffset = idx % 2 === 1 ? idx * 18 : -idx * 18 ;
          }
          if(item.source === item.target){
            item.type = 'loop';
          }
        }
      })
    }

    return data
}
// 用单例缓存 当前点击的 画布的节点
export const CurNodeEdge = (options) => {
  function Singleton(options){
      this.data = options;
  };

  var instance;
  var _static = {
      getInstance : function(){
          if(instance === undefined){
              instance = new Singleton(options)
          };
          return instance;
      }
  };
  return _static;
  
}
// 画布空太
export const graphEmptyStatus = (ele,fn) => {
  const emptyP = document.createElement('p');
  emptyP.innerHTML = '当前页面是空的，请新建您的数据模型';
  emptyP.style.cssText = `color: #777; text-align: center; margin-bottom: 20px;`

  const divBox = document.createElement('div')
  divBox.innerHTML = '新建实体';
  divBox.style.cssText = `width: 100px; height: 100px; border: 2px solid #1890ff; margin: 0 auto; border-radius: 100%;
                          background: #fff; cursor: pointer; color: #888; text-align: center; line-height: 96px;`

  divBox.onclick = () => fn(1)

  const divContainer = document.createElement('div')
  divContainer.appendChild(emptyP);
  divContainer.appendChild(divBox);
  divContainer.style.cssText = `position: absolute; top: 200px; left: 28%;`

  ele.style.cssText = `positon: relative; `
  ele.appendChild(divContainer);
}
// 新建实体数据
export const entityForAddData = (values,type) => {
  let newObj = {}
  newObj = {
    description: "",
    label: values.showName,
    source: values.source || '',
    id: "",
    name: values.name,
    nameSpace: "",
    target: values.target || '',
    typeId: type,
    x: '',
    y: ''
  }
  return newObj
}
// 新建实体画布
export const entityForAddGraph = (values,type) => {
  let model = {}
  model = {
    id: '',
    name: values.name,
    label: values.showName,
    x: Math.random()*400,
    y: Math.random()*200,
    type: type === 2 ? 'expandNode' : '',
    values: type === 2 ? [{key: '暂无数据'}] : []
  };
  return model
}
// 属性编辑
export const protoForEdit = (dataList, values) => {
  dataList.forEach(ele => {
    if(ele.type.name === values.protoName){
      ele.displayName = values.showName
      ele.type.name = values.protoName
      ele.type.type = values.protoType
    }
  });
  return dataList
}
// 添加属性
export const protoForAdd = (dataList, values) => {
  dataList.push({
    displayName: values.showName,
    elementId: "",
    id: "",
    isSystem: false,
    type:{
      decimalPrecision: 0,
      defaultValue: "",
      description: "",
      isPrimary: false,
      isUnique: false,
      length: 100,
      name: values.protoName,
      type: values.protoType
    }
  })
  return dataList
}
// 添加 / 编辑 属性 >>打开弹框<<
export const protoForAddEdit = (type,record) => {
  let newObj = {}
  let formList = []
  if(type === 1){
    formList = entityDataRight
  }else if(type === 3){
    formList = relationshipRight
  }else if(type === 2){
    formList = tableDataRight
  }
  formList.forEach(sub => {
    if(sub.name === 'protoName'){
      if(record && record.statusType.toLowerCase() === 'published'){
        sub.disabled = 1
      }else {
        sub.disabled = 0
      }
    }
  })
  newObj = {
    isEdit: record ? true : false,
    isPrototype: true,
    title: '添加属性',
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    content: formList
  }
  return newObj
}
// 新建实体类型 关系类型 表类型, >>打开弹框<<
export const addNodeEdge = (type) => {
  let newObj = {}
  if(type === 1){
    newObj = {
      isPrototype: false,
      mod_type: 1,
      labelCol: { span: 9 },
      wrapperCol: { span: 15 },
      title: '新建实体',
      content: entityData
    }
  }else if(type === 2){
    newObj = {
      isPrototype: false,
      mod_type: 2,
      labelCol: { span: 7 },
      wrapperCol: { span: 17 },
      title: '新建表',
      content: tableData
    }
  }else if(type === 3){
    newObj = {
      isPrototype: false,
      mod_type: 3,
      labelCol: { span: 9 },
      wrapperCol: { span: 15 },
      title: '新建关系',
      content: relationshipData
    }
  } 
  return newObj
}
// 删除大项 实体、关系
export const deleteElement = () => {
  Modal.confirm({
    title: '确认删除吗？',
    content: '删除不可恢复！',
    okText: '确认',
    cancelText: '取消',
    style:{top: '36%'},
    onOk() {
      alert("请求成功了")
    },
    onCancel() {},
  });
}
// 切换
export const switchChange = (property, key, record) => {
  let newproperty = cloneDeep(property)
  newproperty.forEach(item => {
    if(key === 'iskeyword'){
      if(item.type.name === record.name){
        item.type.isUnique = true
      }else{
        item.type.isUnique = false
      }
    }else {
      if(item.type.name === record.name){
        item.isDisplay = true
      }else{
        item.isDisplay = false
      }
    }
  })
  return newproperty
}
import React,{useState,useEffect} from 'react';
// import ModalFrame from '../../ModalFrame'
import { Button, Empty, Tooltip,Table,Switch,ConfigProvider,Modal,message } from '@components/uis';
import { QuestionCircleOutlined, PlusOutlined,EditOutlined,DeleteOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { entityColumns,tableColumns,relationColumns } from '../../business/modal';

import './style.less'
const { confirm } = Modal

const AddField = (props) => {
    const {label="属性名称",property, nodeData={},handAddProperty,handDelProperty,handSwitchChange} = props;
    const [tableData, setTableData] = useState([])
    const [columns, setColumns] = useState(null)

    // 删除属性确认
    const handDeletaProperty = (type, record) => {
        if(property.length <= 1){
            message.warning('至少保留一项属性')
            return;
        }
        if(record.iskeyword){
            message.warning('主键被占用')
            return;
        }
        if(record.recordName){
            message.warning('记录的展示名称占用')
            return;
        }
        confirm({
            title: '确定要删除此属性吗？',
            icon: <ExclamationCircleOutlined />,
            content: '删除后不可回复',
            okText: '确认',
            cancelText: '取消',
            style:{ top: '36%' },
            onOk() {
                handDelProperty(nodeData.typeId, record)
            },
            onCancel() {},
        });
    }

    //这里面就是表格自己定义的空状态
    const customizeRenderEmpty = () => (
        <div className="addFieldnoData">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'暂无数据'}/>
            <Button type="dashed" icon={<PlusOutlined />} onClick={() => handAddProperty(nodeData.typeId)}>
                添加属性
            </Button>
        </div>
    );

    useEffect(() => {
        if(nodeData && nodeData.typeId){
            let newArr = []
            let columnsList = []
            if(nodeData.typeId === 1){
                columnsList = entityColumns
            }
            if(nodeData.typeId === 2){
                columnsList = tableColumns
            }
            if(nodeData.typeId === 3){
                columnsList = relationColumns
            }
           
            columnsList.forEach(itms => {
                if(itms.key === 'iskeyword' || itms.key === 'recordName'){
                    itms.render = (text, record) => {
                        return (
                            <Switch
                                key={record.key}
                                defaultChecked={text}
                                checked={text}
                                size="small"
                                onChange={(checked) => handSwitchChange(itms.key,record, checked)}
                            />
                        )
                    }
                }
                if(itms.key === 'action'){
                    itms.render = (text, record) => {
                        return (
                            <>
                                <span className="edit" onClick={() => handAddProperty(nodeData.typeId, record)}>
                                    <Tooltip title="编辑">
                                        <EditOutlined />
                                    </Tooltip>
                                </span>
                                <span className="delete" onClick={() => handDeletaProperty(nodeData.typeId, record)}>
                                    <Tooltip title="删除">
                                        <DeleteOutlined />
                                    </Tooltip>
                                </span>
                            </>
                        )
                    }
                }
            })
        
            if(property.length){
                if(nodeData.typeId === 1){
                    property.map((item, idx) => {
                        newArr.push({
                            key: item.id || idx,
                            name: item.type.name,
                            type: item.type.type,
                            showName: item.displayName,
                            statusType: item.statusType,
                            iskeyword: item.type.isUnique ? true : false,
                            recordName: item.isDisplay ? true : false
                        })
                    })
                }
                if(nodeData.typeId === 2){
                    property.map((item, idx) => {
                        newArr.push({
                            key: item.key || idx,
                            name: item.type.name,
                            type: item.type.type,
                            statusType: item.statusType,
                        })
                    })
                    
                }
                if(nodeData.typeId === 3){
                    property.map((item, idx) => {
                        newArr.push({
                            key: item.key || idx,
                            name: item.type.name,
                            type: item.type.type,
                            showName: item.displayName,
                            statusType: item.statusType,
                        })
                    })
                   
                }
                setColumns(columnsList)
                setTableData([...newArr])
            }else {
                setTableData([])
            }
        }
    }, [nodeData, property])
    
    return (
        <div className="addField">
            <div className="addFieldTitle">
                <div className="addFieldText">
                    <span className="addFieldLabel">{label}</span>
                    <Tooltip title="提示：至少有一项属性">
                        <QuestionCircleOutlined style={{color: '#00000073'}}/>
                    </Tooltip>
                </div>
                {
                    tableData.length ? (
                        <div className="addFieldProto">
                            <Button icon={<PlusOutlined />} onClick={() => handAddProperty(nodeData.typeId)}>
                                添加属性
                            </Button>
                        </div>
                    ) : ''
                }
            </div>
            
            <div className="addFieldTableBody">
                <ConfigProvider renderEmpty={customizeRenderEmpty}>
                    <Table
                        scroll={{x: nodeData.typeId === 1 ? 545 : true}}
                        columns={columns}
                        dataSource={tableData}
                        size={'small'}
                        pagination={false}
                    />
                </ConfigProvider>
            </div>

        </div>
    )
}

export default AddField

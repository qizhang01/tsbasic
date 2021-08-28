import React,{memo,useState, useCallback} from 'react';
import {Tabs, Empty, Button, Form} from '@components/uis';
import InputComp from './components/InputComp';
import ColorPicker from './components/ColorPicker';
import AddField from './components/AddField';
import ShowField from './components/ShowField';
import { DeleteOutlined} from '@ant-design/icons';
import './index.less';

const { TabPane } = Tabs;

const PageOutline = (props) => {
    const [form] = Form.useForm();
    const {
        property,
        nodeData,
        handChangeColor,
        handListenValue,
        handAddProperty,
        handDelProperty,
        handDelNodeEdge,
        handSwitchChange
    } = props;

    // 删除此项
    const handDelete = useCallback((node) => {
        handDelNodeEdge(node)
    },[])
    console.log(nodeData, 888888888, '---------- PageOutline')
    return (
        <div className="pageOutline">
            <Tabs defaultActiveKey="1">
                <TabPane tab="属性" key="1">
                    {
                        Object.keys(nodeData).length ? (
                            <>
                                <InputComp {...nodeData} handListenValue={handListenValue}/>
                                <ColorPicker {...nodeData} handChangeColor={handChangeColor}/>
                                {
                                    nodeData.source || nodeData.target ? (
                                        <ShowField {...nodeData}/>
                                    ) : ''
                                }
                                <AddField
                                    property={property}
                                    nodeData={nodeData}
                                    handAddProperty={handAddProperty}
                                    handDelProperty={handDelProperty}
                                    handSwitchChange={handSwitchChange}
                                />
                                <Button icon={<DeleteOutlined />} onClick={() => handDelete(nodeData)}>
                                    删除
                                </Button>
                            </>
                        ) : (
                            <div>
                                <Empty 
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={
                                        <div>
                                            <p>暂无数据</p>
                                            <p>请选择节点/关系查看属性详情</p>
                                        </div>
                                    }
                                />
                            </div>
                        )
                    }
                </TabPane>
                <TabPane tab="页面概要" key="2">
                    {
                        Object.keys(nodeData).length ? (
                            <>
                                <h2>{nodeData.label}</h2>
                                {/* <p></p> */}
                                <h2>属性</h2>
                                {
                                    property.map((item, idx) => {
                                        return (
                                            <p key={idx}>{item.displayName}</p>
                                        )
                                    })
                                }
                            </>
                        ) : ''
                    }
                </TabPane>
            </Tabs>
        </div>
    )
}

export default memo(PageOutline)

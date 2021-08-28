import React, {memo} from 'react';
import {
    // UndoOutlined,
    // ImportOutlined,
    PlusCircleOutlined,
    ArrowRightOutlined,
    TableOutlined,
    SendOutlined
} from '@ant-design/icons';
import './index.less';

const tabBarList = [
    // {
    //     id: 1,
    //     icon: <UndoOutlined />,
    //     name: '撤销'
    // },
    // {
    //     id: 2,
    //     icon: <ImportOutlined />,
    //     name: '重做'
    // },
    {
        id: 1,
        icon: <PlusCircleOutlined />,
        name: '新建实体'
    },
    {
        id: 2,
        icon: <TableOutlined />,
        name: '新建表'
    },
    {
        id: 3,
        icon: <ArrowRightOutlined />,
        name: '新建关系'
    },
    {
        id: 4,
        icon: <SendOutlined />,
        name: '发布'
    },
]

const SiderBarWrapper = (props) => {
    const {handAddNodeEdge, handPublish} = props

    const handSelectType = (type) => {
        if(type !== 4){
            handAddNodeEdge(type)
        }else {
            handPublish()
        }
    }

    return (
        <div className="siderBarWrapper">
            <div className="container">
                {
                    tabBarList.map((itm) => (
                        <div className="item" key={itm.id} onClick={() => handSelectType(itm.id)}>
                            <div>
                                {itm.icon}
                                <p>{itm.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(SiderBarWrapper)

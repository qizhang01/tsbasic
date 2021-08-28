import React from 'react'
import './style.less'

const ShowField = (props) => {
    const {source,target} = props
 
    return (
        <div className="showField">
            <p className="title">关系类型属性</p>
            <div className="typeList">
                <div>
                    <p className="Entity">开始的实体</p>
                    <p className="deEntity">{source}</p>
                </div>
                <div>
                    <p className="Entity">指向的实体</p>
                    <p className="deEntity">{target}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowField

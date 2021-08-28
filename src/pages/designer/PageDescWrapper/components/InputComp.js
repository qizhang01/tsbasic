import React,{useState} from 'react';
import { Input,Tooltip } from '@components/uis';
import { QuestionCircleOutlined} from '@ant-design/icons';
import {nameRegExp, labelRegExp} from '../../constant/index'

import './style.less'

const InputComp = (props) => {
    const {name,label,typeId,statusType, handListenValue} = props
    const [errNameText, seterrNameText] = useState('')
    const [errLabelText, seterrLabelText] = useState('')

    const handValidate = (typeId, value, type) => {
        let isOK = false
        if(type === 'name'){
            isOK = nameRegExp.test(value)
            if(!value){
                seterrNameText('类型名称不能为空')
            }else {
                if(!isOK){
                    seterrNameText('命名有误，请查看规则')
                }else {
                    seterrNameText('')
                }
            }
            
        }
        if(type === 'label'){
            isOK = labelRegExp.test(value)
            if(!value){
                seterrLabelText('类型展示名称不能为空')
            }else {
                if(!isOK){
                    seterrLabelText('命名有误，请查看规则')
                
                }else {
                    seterrLabelText('')
                }
            }
            
        }
        
        
        handListenValue(typeId, value, type)
    }

    return (
        <div className="inputComp">
            <div className="itemInput">
                <p className='showName'>
                    <span>类型名称</span>
                    <Tooltip title="仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128">
                        <QuestionCircleOutlined style={{color: '#00000073'}}/>
                    </Tooltip>
                </p>    
                <Input placeholder="请输入实体类型名称" value={name} disabled={statusType.toLowerCase() === 'published'}  onChange={e => handValidate(typeId, e.target.value, 'name')}/>
                <span className="error">{errNameText}</span>
            </div>

            <div className="itemInput">
                <p className='showName'>
                    <span>类型的展示名称</span>
                    <Tooltip title="支持中英文、数字、特殊字符，最长字符数128">
                        <QuestionCircleOutlined style={{color: '#00000073'}}/>
                    </Tooltip>
                </p>
                <Input placeholder="实体类型的展示名称" value={label} onChange={e => handValidate(typeId, e.target.value, 'label')}/>
                <span className="error">{errLabelText}</span>
            </div>
        </div>
    )
}

export default InputComp

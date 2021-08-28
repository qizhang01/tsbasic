import React from 'react';
import { Form, Input} from '@components/uis';

const InputShort = (props) => {
    const {name="名称", label="name", required=false, message="请输入表名称", tooltip='',rule=[],disabled} = props

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                { required: required, message: message },
                ...rule
            ]}
            tooltip={tooltip}
            
        >
            <Input disabled={disabled} placeholder={message}/>
        </Form.Item>
    )
}

export default InputShort

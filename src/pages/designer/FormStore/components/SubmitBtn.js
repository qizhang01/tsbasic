import React from 'react';
import { Form,Button } from '@components/uis';

const SubmitBtn = (props) => {
    const {name="", label="", required=false, message="", tooltip="", text=""} = props

    return (
        <Form.Item 
            name={name}
            label={label}
            rules={[{ required: required }]}
            tooltip={tooltip}
        >
            <Button type="primary" htmlType="submit">
                {text}
            </Button>
        </Form.Item>
    )
}

export default SubmitBtn

import React from 'react';
import { Form, Select} from '@components/uis';

const { Option } = Select;

const SelectSingle = (props) => {
    const {name="", label="", required=false, message="", tooltip="",} = props

    const handGenderChange = (value) => {}

    return (
        <Form.Item 
            name={name}
            label={label}
            rules={[{ required: required, message: message }]}
            tooltip={tooltip}
        >
          <Select
            placeholder={message}
            onChange={handGenderChange}
            allowClear
          >
            <Option value="Text">Text</Option>
            <Option value="Decimal">Decimal</Option>
            <Option value="Bool">Bool</Option>
            <Option value="SysId">SysId</Option>
          </Select>
        </Form.Item>
    )
}

export default SelectSingle
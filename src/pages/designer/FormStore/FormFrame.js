import React,{memo} from 'react';
import { Form } from '@components/uis';
import InputShort from './components/InputShort'
import SelectSingle from './components/SelectSingle'
import SubmitBtn from './components/SubmitBtn'

import './style.less'

const classsification = (item) => {
    switch (item.type) {
        case 'InputShort':
            return <InputShort key={item.id} {...item}/>;
        case 'SelectSingle':
            return <SelectSingle key={item.id} {...item}/>;
        
        case 'SubmitBtn':
            return <SubmitBtn key={item.id} {...item}/>;
        
        default:
            break;
    }
}

const FormFrame = (props) => {
    const { form, formData,handListenValue=()=>{} } = props;

    // 成功回调
    const onFinish = (values) => {
        console.log('Success==Success:', values);
    };
    
    // 失败回调
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // 监听值的变化回调
    const onValuesChange = (changedValues, allValues) => {
        handListenValue(changedValues)
    }
    
    return (
        <div>
            <Form
                form={form}
                name="basic"
                labelCol={formData.labelCol}
                wrapperCol={formData.wrapperCol}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={onValuesChange}
            >
                {
                    formData.content.map(item => classsification(item))
                }
            </Form>
        </div>
    )
}

export default memo(FormFrame)

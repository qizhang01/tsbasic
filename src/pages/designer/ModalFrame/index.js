import React, {memo} from 'react';
import { Modal } from '@components/uis';
import FormFrame from '../FormStore/FormFrame'

const ModaFrame = (props) => {
    const {
        form,
        isVisible,          // bool: 打开关闭
        modalData,          // obj: 数据内容
        handModalOk,        // func: 确认
        handModalCancel     // func: 取消
    } = props;
    
    return (
        <Modal
            title={modalData ? modalData.title : ''}
            cancelText="取消"
            okText="确定"
            centered={true}
            destroyOnClose={true}
            visible={isVisible}
            onOk={() => handModalOk(modalData.mod_type, modalData.isPrototype, modalData.isEdit)}
            onCancel={handModalCancel}
        >
            {
                modalData ? <FormFrame form={form} formData={modalData}/> : ''
            }
        </Modal>
    )
}

export default memo(ModaFrame)

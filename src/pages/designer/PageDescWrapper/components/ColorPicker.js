import React from 'react';
import { SketchPicker } from 'react-color';
import { Tooltip } from '@components/uis';

import './style.less'

const ColorComp = (props) => {
    const {style,typeId, handChangeColor} = props;

    // onChange颜色
    const handColorPicker = (clr) => {
        let hex = clr.hex || '';
        let hexUpperCase = hex.toLocaleUpperCase(); // hexUpperCase 为16色值，选中的颜色
        handChangeColor(typeId, hexUpperCase)
    }
    
    const SketchPickerDom = () => {
        return (
            <SketchPicker
                defaultColor={style.stroke}
                color={style.stroke}
                onChange={(clor) => handColorPicker(clor)}
            />
        )
    }

    return (
        <>
            <div className='colorComp'>
                <div className="title">颜色</div>
                <Tooltip
                    title={SketchPickerDom}
                    placement="bottomLeft"
                    overlayClassName='colorPicker'
                    getPopupContainer={() => document.querySelector('.colorComp')}
                >
                    <div className="colorBox" style={{background: style.stroke}}></div>
                </Tooltip>
            </div>
        </>
    )
}

export default ColorComp

import React,{useState, useEffect} from 'react';
import { hgRequest } from '@libs/request';
import {useProperty} from '../useCustom/useProperty'
import { convertToGraphda} from '../business/index';

export const usedata = () => {
    const [data, setData] = useState({
        data: {},
        lineSty: []
    })

    useEffect(() => {
        // /mocks/canvasStyle.json
        let http1 = hgRequest(`/api/v1/project/${1}`,{methods: 'get'});
        let http2 = hgRequest(`/api/v1/canvas/${1}`,{methods: 'get'})
        let newArr = [http1, http2]
        Promise.all(newArr).then(resfirst => {
            let results = {};
            let style = [];
            resfirst.length && resfirst.map(itm => {
                if(Array.isArray(itm)){
                    style = itm
                }else {
                    results = itm
                }
            })
           
            const data = convertToGraphda(results, style);
            const lines = [];
            let nodesList = [];
            let protoNode = {}
            data.nodes.map(item => {
                if(item.typeId === 2){
                    protoNode= item;
                    lines.push(useProperty(item.typeId));
                }else {
                    lines.push(item)
                }
            })
            Promise.allSettled(lines).then(res => {
                res.length && res.map(val => {
                    if(val.status === 'fulfilled'){
                        if(Array.isArray(val.value)){
                            let headVal = [];
                            let obj = {};
                            
                            val.value.length && val.value.map((sub) => {
                                headVal.push({
                                    key: sub.displayName,
                                    statusType: sub.statusType
                                })
                            })
                            obj = {
                                ...protoNode,
                                type: 'expandNode',
                                properties: [],
                                values: headVal.length ? headVal : [{key: '暂无数据'}]
                            }
                            style.map(iti => {
                                if(protoNode.name === iti.name){
                                    window.color = iti.lineColor
                                    obj['style'] = {
                                        stroke: iti.lineColor
                                    }
                                }
                            })
                            nodesList.push(obj)
                        }else {
                            nodesList.push(val.value)
                        }
                    }
                })
                data.nodes = nodesList

                setData({
                    data,
                    lineSty: style
                })
            })
        }).catch(err => {
            alert(err, '请求错误')
        })
    }, [])

    return data
}

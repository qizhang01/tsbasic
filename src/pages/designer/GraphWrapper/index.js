import React,{useRef, useEffect, memo} from 'react'
import G6 from '@antv/g6';
import {useWindowSize} from '../useCustom/useWindowSize'
import {
  modes,
  layout1,
  defaultNode,
  defaultEdge,
  tooltip,
  edgeTooltip,
  expandNode,
  nodeStateStyles,
  edgeStateStyles,
  nodeMouseenter,
  nodeMouseleave,
  edgeMouseenter,
  edgeMouseleave,
  nodeClick,
  edgeClick,
  nodeDragstart,
  nodeDrag,
  nodeDragend
} from './config';
import'./index.less'

// 绘制表格
G6.registerNode('expandNode', expandNode);

const GraphWrapper = (props) => {
   const {graph, handSelectNodesEdges} = props;
    const ref = useRef(null);
    // let graph = useRef(null);
    const {width, height} = useWindowSize(document.body)

    useEffect(() => {
      if(graph.current){
        graph.current.changeSize(width - 530, height - 66)
      }
    },[width, height])

    useEffect(() => {
        graph.current = new G6.Graph({
          container: ref.current,
          width: Number(ref.current.offsetWidth),
          height: Number(document.body.offsetHeight - 66),
          animate: true,  // 是否启用全局动画。
          autoPaint: true, //当图中元素更新，或视口变换时，是否自动重绘。
          modes,
          plugins: [tooltip,edgeTooltip],
          layout: layout1,
          defaultNode,
          defaultEdge,
          nodeStateStyles,
          edgeStateStyles,
        });

        // 鼠标进入节点
        nodeMouseenter('node:mouseenter', graph)
        // 鼠标离开节点
        nodeMouseleave('node:mouseleave', graph)
        // 鼠标进入edge
        edgeMouseenter('edge:mouseenter', graph)
        // 鼠标离开edge
        edgeMouseleave('edge:mouseleave', graph)
        // 点击节点
        nodeClick('node:click', graph, handSelectNodesEdges)
        // 点击边
        edgeClick('edge:click', graph, handSelectNodesEdges)
        // node 拖动开始
        nodeDragstart('node:dragstart', graph)
        // node 拖动
        nodeDrag('node:drag', graph)
        // node 拖动结束
        nodeDragend('node:dragend', graph)
    }, [])

    return (
      <div className='gragh' id="gragh" ref={ref}></div>
    )
}

export default memo(GraphWrapper)

export const edgeMouseenter = (evt, graph) => {
    graph.current.on(evt, (e) => {
        const nodeItem = e.item; // 获取鼠标进入的节点元素对象
        graph.current.setItemState(nodeItem, 'hover', true); // 设置当前edge的 hover 状态为 true
    });
}
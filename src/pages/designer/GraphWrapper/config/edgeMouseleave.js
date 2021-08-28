export const edgeMouseleave = (evt, graph) => {
    graph.current.on(evt, (e) => {
        const nodeItem = e.item; // 获取鼠标离开的节点元素对象
        graph.current.refreshItem(nodeItem)
        graph.current.setItemState(nodeItem, 'hover', false); // 设置当前edge的 hover 状态为 false
    });
}
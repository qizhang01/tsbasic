export const nodeClick = (evt, graph, fn) => {
    graph.current.on(evt, (e) => {
        // 先将所有当前是 click 状态的节点置为非 click 状态
        const clickNodes = graph.current.findAllByState('node', 'click');
        clickNodes.forEach((cn) => {
          graph.current.setItemState(cn, 'click', false);
        });
        const nodeItem = e.item; // 获取被点击的节点元素对象
        fn(nodeItem, 'nodes')
        // graph.current.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
    });
}
export const edgeClick = (evt, graph, fn) => {
    graph.current.on(evt, (e) => {
        // 先将所有当前是 click 状态的边置为非 click 状态
        const clickEdges = graph.current.findAllByState('edge', 'click');
        clickEdges.forEach((ce) => {
          graph.current.setItemState(ce, 'click', false);
        });
        const edgeItem = e.item; // 获取被点击的边元素对象
        fn(edgeItem, 'edges')
        graph.current.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
        // graph.current.setItemState(edgeItem, 'select', true); // 设置当前边的 select 状态为 true
    });
}
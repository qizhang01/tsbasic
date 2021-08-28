export const nodeMouseenter = (evt, graph) => {
    graph.current.on(evt, (e) => {
        const nodeItem = e.item; // 获取鼠标进入的节点元素对象
        graph.current.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
        graph.current.setAutoPaint(false)
        graph.current.getNodes().forEach(function(node) {
          graph.current.clearItemStates(node);
          graph.current.setItemState(node, 'dark', true);
        });
        graph.current.setItemState(nodeItem, 'dark', false);
        graph.current.setItemState(nodeItem, 'highlight', true);
        graph.current.getEdges().forEach(function(edge) {
          if (edge.getSource() === nodeItem) {
            graph.current.setItemState(edge.getTarget(), 'dark', false);
            graph.current.setItemState(edge.getTarget(), 'highlight', true);
            graph.current.setItemState(edge, 'highlight', true);
            edge.toFront();
          } else if (edge.getTarget() === nodeItem) {
            graph.current.setItemState(edge.getSource(), 'dark', false);
            graph.current.setItemState(edge.getSource(), 'highlight', true);
            graph.current.setItemState(edge, 'highlight', true);
            edge.toFront();
          } else {
            graph.current.setItemState(edge, 'highlight', false);
          }
        })
        graph.current.paint();
        graph.current.setAutoPaint(true);
    });
}
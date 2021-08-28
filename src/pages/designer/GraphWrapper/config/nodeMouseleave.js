export const nodeMouseleave = (evt, graph) => {
    graph.current.on(evt, (e) => {
        const nodeItem = e.item; // 获取鼠标离开的节点元素对象
        graph.current.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
        graph.current.setAutoPaint(false);
        graph.current.getNodes().forEach(function(node) {
          graph.current.clearItemStates(node);
          if (node === nodeItem || node === nodeItem){
            graph.current.refreshItem(node);
          }
        });
        graph.current.getEdges().forEach(function(node) {
          graph.current.clearItemStates(node);
          // if (node === nodeItem || node === nodeItem){
          //   graph.current.refreshItem(node);
          // }
        });
        graph.current.paint();
        graph.current.setAutoPaint(true);
    });
}
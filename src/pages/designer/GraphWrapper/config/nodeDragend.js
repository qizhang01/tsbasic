export const nodeDragend = (evt, graph) => {
    graph.current.on(evt, (e) => {
        const nodeItem = e.item;
        graph.current.getEdges().forEach(function(edge) {
          graph.current.clearItemStates(edge);
          if (edge.getSource() === nodeItem || edge.getTarget() === nodeItem){
            graph.current.refreshItem(edge);
          }
        });
    });
}
export const layout = {
    type: 'force', // 布局类型 环形:circular 力导向:force 辐射状:radial 同心圆:concentric 层次:dagre
    direction: 'LR',    // 自左至右布局，可选的有 H / V / LR / RL / TB / BT
    preventOverlap: true, // 防止节点重叠
    rankSep: 100,      // 每个层级之间的间距
    nodeSep: 100,      // 节点之间间距
    linkDistance: 400, // 指定边距离为100
    nodeStrength: -30,         // 可选，节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用
    edgeStrength: 0.2,        // 可选，边的作用力，默认根据节点的出入度自适应
    nodeSize: 100,             // 可选
    // gravity: 2, //重力的大小，影响布局的紧凑程度
    // unitRadius: 50,
    // linkDistance: 100,         // 可选，边长
    // collideStrength: 1,     // 可选，防止重叠的力强度，范围 [0, 1]
    // alpha: 0.3,               // 可选，当前的迭代收敛阈值
    // alphaDecay: 0.028,        // 可选
    // alphaMin: 0.01,           // 可选
    // forceSimulation: null,    // 可选
    // onTick: () => {           // 可选，每一次迭代的回调函数
    //   console.log('ticking');
    // },
    // onLayoutEnd: () => {      // 可选，布局完成后的回调函数
    //   console.log('force layout done');
    // }
}


export const defaultNode = {
    size: 100, // 节点大小
    type: 'circle',
    labelCfg: { // 节点上的标签文本配置
      style: { // 节点标签文字颜色
          fill: '#000000A6',
          fontSize: 15,
      },
    },
    style: {  // 边
      fill: '#fff', // 节点填充色
      stroke: '#3DBBF3', // 节点描边色
      lineWidth: 2, // 节点描边粗细
      cursor: 'pointer',
    },
    // linkPoints: {
    //   top: true,
    //   right: true,
    //   bottom: true,
    //   left: true,
    // },
}
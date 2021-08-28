import G6 from '@antv/g6';
export const edgeStateStyles = {
    // 鼠标点击边，即 click 状态为 true 时的样式   #047ff1
    hover: {
      stroke: '#999',
      endArrow: {
        path: G6.Arrow.triangle(6, 8, 2),
        d: 2,
        fill:'#999'
      }
      // lineWidth: 10,
      // stroke: 'red',
    },
    click: {
      // stroke: 'steelblue',
    },
    highlight: {
      stroke: '#999',
      endArrow: {
        path: G6.Arrow.triangle(6, 8, 2),
        d: 2,
        fill:'#999'
      }
    },
    select: {
      stroke: 'steelblue'
    }
}
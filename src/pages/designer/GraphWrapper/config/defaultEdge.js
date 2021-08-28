import G6 from '@antv/g6';
export const defaultEdge = {
    // 边样式配置
    type:'line', // line：直线/polyline：折线/arc：圆弧线/quadratic：二阶贝塞尔曲线/loop：自环
    style: {
      // opacity: 0.6, // 连线透明度
      stroke: '#d1d1d1', // 连线描边颜色
      lineWidth: 2,
      // lineAppendWidth: 2, // 边响应鼠标事件时的检测宽度
      cursor: 'pointer',
      endArrow: {
          path: G6.Arrow.triangle(6, 8, 2),
          d: 2,
          fill:'#d1d1d1'
      }
    },
    // 边上的标签文本配置
    labelCfg: {
      position: 'center',
      refY: 14,
      autoRotate: true, // 边上的标签文本根据边的方向旋转
      style: { 
          fontSize: 15,
      }
    }
  }
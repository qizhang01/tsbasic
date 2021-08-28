// 绘制表格
export const expandNode = { 
    draw: function draw(cfg, group) {
      const mainGroup = group.addGroup({
        id: 'main-group',
      });
      const keyShape = mainGroup.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: 100,
          height: 40 * cfg.values.length,
          fill: '#FFF',
          cursor:'move'
        },
        name: 'key-rect-shape',
      });
  
      const subGroup = group.addGroup({
        id: 'sub-group',
      });
      cfg.values && cfg.values.forEach(function (data, index) {
        subGroup.addShape('rect', {
          attrs: {
            x: 0,
            y: index * 40,
            width: 100,
            height: 40,
            stroke: '#3DBBF3',
          },
          name: 'rect-shape',
        });
      
        subGroup.addShape('text', {
          attrs: {
            text: data.key,
            fill: '#000',
            x: 10,
            y: 23 + index * 40,
            fontSize: 14,
            textBaseline: 'middle',
            className: 'sub-group-text',
          },
          name: 'sub-text-shape1',
        });
      });
  
      const listGroup = group.addGroup({
        id: 'detail-list-group',
      });
  
      cfg.properties && cfg.properties.forEach(function (property, index) {
        listGroup.addShape('rect', {
          attrs: {
            x: 100 * (index + 1),
            y: 0,
            width: 100,
            height: 40 * cfg.values.length,
            fill: '#fff',
            stroke: '#3DBBF3',
          },
          name: 'list-rect-shape2',
        });
        let count = 0;
        for (const p in property) {
          listGroup.addShape('rect', {
            attrs: {
              x: 100 * (index + 1),
              y: count * 40,
              width: 100,
              height: 40,
              stroke: '#3DBBF3',
            },
            name: 'rect-shape',
          });
          // 每个rect中添加文本
          listGroup.addShape('text', {
            attrs: {
              text: property[p],
              fill: '#000',
              x: 35 + 100 * (index + 1),
              y: count * 40 + 30,
              fontSize: 14,
              textBaseline: 'middle',
              textAlign: 'left',
            },
            name: 'text-shape',
          });
          count++;
        }
      });
      listGroup.show();
      return keyShape;
    },
    afterUpdate(cfg, group) {
      console.log(cfg, group, 8908080809)
    },
}
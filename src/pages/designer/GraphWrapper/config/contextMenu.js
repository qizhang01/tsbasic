import G6 from '@antv/g6';

export const contextMenu = new G6.Menu({
    getContent(evt) {
      return `
      <ul style='list-style: none;padding:0 12px;margin: 6px 0;'>
        <li style='font-size: 14px;margin-bottom: 4px;cursor: pointer;'>撤销</li>
      </ul>`;
    },
    handleMenuClick: (target, item) => {
      console.log(target, item, 6768678678);
    },
    // offsetX and offsetY include the padding of the parent container
    // 需要加上父级容器的 padding-left 16 与自身偏移量 10
    offsetX: 16 + 10,
    // 需要加上父级容器的 padding-top 24 、画布兄弟元素高度、与自身偏移量 10
    offsetY: 0,
    // the types of items that allow the menu show up
    // 在哪些类型的元素上响应['node', 'edge', 'canvas']
    itemTypes: ['node','edge'],
  });

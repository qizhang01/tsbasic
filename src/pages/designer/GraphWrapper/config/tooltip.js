import G6 from '@antv/g6';

export const tooltip = new G6.Tooltip({
  offsetX: 15,
  offsetY: 15,
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['node'],
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div');
    outDiv.style.cssText = `height: 40px`
    outDiv.innerHTML = `
      <ul>
        <li>类型名称: ${e.item.getModel().name}</li>
        <li>展示名称: ${e.item.getModel().label}</li>
      </ul>
    `
    return outDiv;
  },
});

export const edgeTooltip = new G6.Tooltip({
  offsetX: 15,
  offsetY: 15,
  // 允许出现 tooltip 的 item 类型
  itemTypes: ['edge'],
  // 自定义 tooltip 内容
  getContent: (e) => {
    const outDiv = document.createElement('div');
    outDiv.style.cssText = `height: 75px`
    outDiv.innerHTML = `
      <ul>
        <li>类型名称: ${e.item.getModel().name}</li>
        <li>展示名称: ${e.item.getModel().label}</li>
        <li>来源: ${e.item.getSource().getModel().name}</li>
        <li>目标: ${e.item.getTarget().getModel().name}</li>
      </ul>
    `
    return outDiv;
  },
});

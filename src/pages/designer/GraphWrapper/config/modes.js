export const modes = {
  default: [
    'drag-canvas',
    'zoom-canvas',
    'drag-node',
    // {
    //   type: 'drag-node',
    //   shouldBegin: e => {
    //     if (e.target.get('name') === 'anchor-point') return false;
    //     return true;
    //   }
    // },
    // {
    //   type: 'create-edge',
    //   trigger: 'drag', // set the trigger to be drag to make the create-edge triggered by drag
    //   shouldBegin: e => {
    //     // avoid beginning at other shapes on the node
    //     if (e.target && e.target.get('name') !== 'anchor-point') return false;
    //     sourceAnchorIdx = e.target.get('anchorPointIdx');
    //     e.target.set('links', e.target.get('links') + 1); // cache the number of edge connected to this anchor-point circle
    //     return true;
    //   },
    //   shouldEnd: e => {
    //     if (e.target && e.target.get('name') !== 'anchor-point') return false;
    //     if (e.target) {
    //       targetAnchorIdx = e.target.get('anchorPointIdx');
    //       e.target.set('links', e.target.get('links') + 1);  // cache the number of edge connected to this anchor-point circle
    //       return true;
    //     }
    //     targetAnchorIdx = undefined;
    //     return true;
    //   }
    // }
  ]
}
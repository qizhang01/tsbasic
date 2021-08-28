import React, {useState,useLayoutEffect} from 'react'

function getSize(el) {
    if (!el) {
      return {};
    }
  
    return {
      width: el.offsetWidth,
      height: el.offsetHeight
    };
}

export const useWindowSize = (ref) => {
    let [ComponentSize, setComponentSize] = useState(getSize(ref));

    function handleResize() {
      if (ref && ref) {
        setComponentSize(getSize(ref));
      }
    }
  
    useLayoutEffect(() => {
      handleResize();
  
      let resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(ref);
  
      return () => {
        resizeObserver.disconnect(ref);
        resizeObserver = null;
      };
    }, []);
  
    return ComponentSize;
}

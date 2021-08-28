import React, {memo} from 'react';
import LogoBox from './LogoBox';
import TabBarListBox from './TabBarListBox';

import './index.less'

const TabBar = () => {
    return (
        <div className="tabBarWrapper">
            <LogoBox />
            <TabBarListBox />
        </div>
    )
}

export default memo(TabBar)

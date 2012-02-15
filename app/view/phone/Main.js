Ext.define('Sbbs.view.phone.Main', {
    extend: 'Ext.tab.Panel',

    config: {
        fullscreen: true,
        activeTab: 0,
        tabBarPosition: 'bottom',

        tabBar: {
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom',
            scrollable: {
                direction: 'horizontal',
                indicators: false
            }
        },

        items: [
            {
                title: '首页',
                iconCls: 'home',
                xtype: 'front'
            },
            {
                title: '十大',
                iconCls: 'favorites',
                xtype: 'topten'
            },
            {
                title: '收藏夹',
                iconCls: 'bookmarks',
                xtype: 'favorites'
            },
            {
                title: '我的帐户',
                iconCls: 'user'
            }
        ]
    }
});

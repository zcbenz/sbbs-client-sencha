Ext.define('Sbbs.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Sbbs.view.ReadWrap'],

    config: {
        fullscreen: true,

        tabBar: {
            docked: 'bottom'
        },

        items: [
            {
                xtype: 'readwrap',
                items: [
                    { xtype: 'front' }
                ],
                title: '首页',
                iconCls: 'home'
            },
            {
                xtype: 'topten',
                title: '十大',
                iconCls: 'favorites'
            },
            {
                xtype: 'favorites',
                title: '收藏夹',
                iconCls: 'bookmarks'
            },
            {
                xtype: 'search',
                title: '搜索',
                iconCls: 'search'
            },
            {
                title: '我的帐户',
                iconCls: 'user'
            }
        ]
    }
});

Ext.define('Sbbs.view.phone.Main', {
    extend: 'Ext.Container',

    config: {
        fullscreen: true,

        layout: 'vbox',
        items: [
            {
                flex: 1,
                navigationBar: null,
                xtype: 'navigationview',
                items: [
                    { xtype: 'front' },
                    { xtype: 'topten' },
                    { xtype: 'favorites' },
                    { xtype: 'search' },
                ]
            },
            {
                xtype: 'tabbar',
                docked: 'bottom',
                activeTab: 0, 
                items: [
                    {
                        title: '首页',
                        iconCls: 'home'
                    },
                    {
                        title: '十大',
                        iconCls: 'favorites'
                    },
                    {
                        title: '收藏夹',
                        iconCls: 'bookmarks'
                    },
                    {
                        title: '搜索',
                        iconCls: 'search'
                    },
                    {
                        title: '我的帐户',
                        iconCls: 'user'
                    }
                ]
            }
        ]
    }
});

Ext.define('Sbbs.view.phone.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Sbbs.view.ReadWrap', 'Sbbs.view.FrontWrap', 'Sbbs.view.Hots'],

    config: {
        fullscreen: true,

        tabBar: {
            docked: 'bottom'
        },

        items: [
            {
                xtype: 'readwrap',
                items: [ { xtype: 'frontwrap' } ],
                title: '首页',
                iconCls: 'home'
            },
            {
                xtype: 'readwrap',
                items: [ { xtype: 'hots' } ],
                title: '十大',
                iconCls: 'favorites'
            },
            {
                xtype: 'readwrap',
                items: [ { xtype: 'favorites' } ],
                title: '收藏夹',
                iconCls: 'bookmarks'
            },
            {
                xtype: 'readwrap',
                items: [ { xtype: 'search' } ],
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

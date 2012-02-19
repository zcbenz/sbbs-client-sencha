Ext.define('Sbbs.view.Topten', {
    extend: 'Ext.Container',
    alias: 'widget.topten',
    requires: ['Ext.TitleBar', 'Sbbs.plugin.PullRefresh', 'Sbbs.store.Topten'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '十大话题'
            },
            {
                id: 'topten-list',
                xtype: 'list',
                flex: 1,
                loadingText: '载入中...',
                emptyText: '无法获取十大话题',
                plugins: [ {xclass: 'Sbbs.plugin.PullRefresh'} ],

                store: Ext.create('Sbbs.store.Topten'),
                itemTpl: '<div>{title}</div>'
            }
        ]
    }
});

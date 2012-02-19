Ext.define('Sbbs.view.Topten', {
    extend: 'Ext.Container',
    alias: 'widget.topten',
    requires: ['Ext.TitleBar', 'Sbbs.store.Topten'],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                title: '十大话题',

                items: [
                    {
                        id: 'topten-refresh',
                        text: '刷新',
                        align: 'right'
                    }
                ]
            },
            {
                id: 'topten-list',
                xtype: 'list',
                flex: 1,
                loadingText: '载入中...',
                emptyText: '无法获取十大话题',

                store: Ext.create('Sbbs.store.Topten'),
                itemTpl: '<div>{title}</div>'
            }
        ]
    }
});

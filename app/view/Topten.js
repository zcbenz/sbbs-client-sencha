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
                flex: 1,

                id: 'topten-list',
                xtype: 'list',

                disableSelection: true,
                loadingText: '载入中...',
                plugins: [ {xclass: 'Sbbs.plugin.PullRefresh'} ],

                store: Ext.create('Sbbs.store.Topten'),
                itemTpl: config.frontItemTpl
            }
        ]
    }
});

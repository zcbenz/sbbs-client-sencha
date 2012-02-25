Ext.define('Sbbs.view.Topboards', {
    extend: 'Ext.Container',
    xtype: 'topboards',
    requires: ['Ext.TitleBar', 'Sbbs.plugin.PullRefresh', 'Sbbs.store.Topboards'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '十大版面'
            },
            {
                flex: 1,

                id: 'topboards-list',
                xtype: 'list',

                disableSelection: true,
                loadingText: '载入中...',
                plugins: [ {xclass: 'Sbbs.plugin.PullRefresh'} ],

                store: Ext.create('Sbbs.store.Topboards'),
                itemTpl: '{description}'
            }
        ]
    }
});

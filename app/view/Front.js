Ext.define('Sbbs.view.Front', {
    extend: 'Ext.Container',
    alias: 'widget.front',
    requires: ['Ext.List', 'Ext.TitleBar', 'Sbbs.plugin.PullRefresh', 'Sbbs.store.SectionHots'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '虎踞龙蟠BBS'
            },
            {
                flex: 1,

                id: 'front-list',
                xtype: 'list',

                loadingText: '载入中...',
                plugins: [ {xclass: 'Sbbs.plugin.PullRefresh'} ],

                store: Ext.create('Sbbs.store.SectionHots'),
                itemTpl: config.frontItemTpl,
                grouped: true,
                pinHeaders: false
            }
        ]
    }
});

Ext.define('Sbbs.view.Front', {
    extend: 'Ext.Container',
    alias: 'widget.front',
    requires: ['Ext.List', 'Ext.TitleBar', 'Sbbs.store.SectionHots'],

    config: {
        title: '虎踞龙蟠BBS',
        layout: 'vbox',

        items: [
            {
                flex: 1,
                id: 'front-sectionhots',
                xtype: 'list',
                loadingText: '载入中...',
                emptyText: '无法获取分区热点',
                plugins: [ {xclass: 'Sbbs.plugin.PullRefresh'} ],

                store: Ext.create('Sbbs.store.SectionHots'),
                itemTpl: '{title}',
                grouped: true,
                pinHeaders: false
            }
        ]
    }
});

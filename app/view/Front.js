Ext.define('Sbbs.view.Front', {
    extend: 'Ext.Container',
    alias: 'widget.front',
    requires: ['Ext.List', 'Ext.TitleBar', 'Sbbs.store.SectionHots'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '虎踞龙蟠BBS',

                items: [
                    {
                        id: 'front-refresh',
                        text: '刷新',
                        align: 'right'
                    }
                ]
            },
            {
                flex: 1,
                id: 'front-sectionhots',
                xtype: 'list',
                loadingText: '载入中...',
                emptyText: '无法获取分区热点',

                store: Ext.create('Sbbs.store.SectionHots'),
                itemTpl: '{title}',
                grouped: true,
                pinHeaders: false
            }
        ]
    }
});

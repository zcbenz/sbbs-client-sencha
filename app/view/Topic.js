Ext.define('Sbbs.view.Topic', {
    extend: 'Ext.Container',
    alias: 'widget.topic',

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '话题',

                items: [ ]
            },
            {
                flex: 1,
                xtype: 'list',
                id: 'front-sectionhots',
                loadingText: '载入中...',
                emptyText: '无法获取话题',

                itemTpl: '{title}'
            }
        ]
    }
});

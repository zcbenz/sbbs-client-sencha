Ext.define('Sbbs.view.Board', {
    extend: 'Ext.Container',
    alias: 'widget.board',

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '版面',

                items: [
                    {
                        id: 'topic-back',
                        cls: 'x-button-back',
                        text: '后退'
                    }
                ]
            },
            {
                flex: 1,

                xtype: 'list',

                loadingText: '载入中...',
                emptyText: '无法获取版面信息',

                itemTpl: '{title}'
            }
        ]
    }
});


Ext.define('Sbbs.view.Topic', {
    extend: 'Ext.Container',
    alias: 'widget.topic',
    requires: ['Ext.TitleBar', 'Sbbs.plugin.ListPaging', 'Sbbs.store.Topic'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '话题',

                items: [
                    {
                        id: 'topic-back',
                        cls: 'x-button-back',
                        text: '后退'
                    },
                    {
                        id: 'topic-board',
                        align: 'right',
                        text: '版面'
                    }
                ]
            },
            {
                flex: 1,

                xtype: 'list',

                loadingText: '载入中...',
                emptyText: '无法获取话题',
                plugins: [
                    {
                        xclass: 'Sbbs.plugin.ListPaging',
                        autoPaging: true
                    }
                ],

                store: Ext.create('Sbbs.store.Topic'),
                itemTpl: '{title}'
            }
        ]
    },

    setTopic: function (record) {
        this.down('titlebar').setTitle(record.get('title'));
        this.down('#topic-board').setText(record.get('board'));

        var store = this.down('list').getStore();
        var proxy = store.getProxy();
        proxy.setExtraParam('token', config.token);
        proxy.setExtraParam('board', record.get('board'));
        proxy.setExtraParam('id', record.get('id'));
        store.setTotalCount(record.get('replies') + 1);
        store.load();
    }
});


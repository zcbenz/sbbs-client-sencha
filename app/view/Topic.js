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
                        text: '返回'
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

                id: 'topic-list',
                xtype: 'list',

                disableSelection: true,
                loadingText: '载入中...',
                plugins: [
                    {
                        xclass: 'Sbbs.plugin.ListPaging',
                        autoPaging: true
                    }
                ],

                store: Ext.create('Sbbs.store.Topic'),
                itemTpl: '{content}'
            }
        ]
    },

    setTopic: function (record) {
        this.down('titlebar').setTitle(record.get('title'));

        var store = this.down('list').getStore();
        var proxy = store.getProxy();
        proxy.setExtraParam('token', config.api_token);
        proxy.setExtraParam('board', record.get('board'));
        proxy.setExtraParam('id', record.get('id'));
        store.removeAll();
        store.loadPage(1); // use loadPage instead of load to reset page
    }
});

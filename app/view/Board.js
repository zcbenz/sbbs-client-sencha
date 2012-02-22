Ext.define('Sbbs.view.Board', {
    extend: 'Ext.Container',
    alias: 'widget.board',
    requires: ['Ext.TitleBar', 'Sbbs.plugin.ListPaging', 'Sbbs.store.Board'],

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '版面',

                items: [
                    {
                        id: 'board-back',
                        cls: 'x-button-back',
                        text: '返回'
                    }
                ]
            },
            {
                flex: 1,

                id: 'board-list',
                xtype: 'list',

                loadingText: '载入中...',
                plugins: [
                    {
                        xclass: 'Sbbs.plugin.ListPaging',
                        autoPaging: true
                    }
                ],

                store: Ext.create('Sbbs.store.Board'),
                itemTpl: config.topicItemTpl
            }
        ]
    },

    setBoard: function (record) {
        this.down('titlebar').setTitle(record.get('name'));
        this.loadFromStore(record.get('name'));
    },

    setBoardFromTopic: function (record) {
        this.down('titlebar').setTitle(record.get('board'));
        this.loadFromStore(record.get('board'));
    },

    loadFromStore: function (name) {
        var store = this.down('list').getStore();
        var proxy = store.getProxy();
        proxy.setExtraParam('token', config.token);
        proxy.setExtraParam('name', name);
        store.removeAll();
        store.loadPage(1); // use loadPage instead of load to reset page
    }
});


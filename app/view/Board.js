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
        // prevent refreshing same Board
        if (this.name && this.name == name)
            return;

        this.name = name;
        if (!this.list)
            this.list = this.down('list');

        // refresh view
        this.down('titlebar').setTitle(name);
        this.list.setMasked({
            xtype: 'loadmask',
            message: '载入中...'
        });

        // clear previous content
        var store = this.list.getStore();
        var proxy = store.getProxy();
        store.removeAll();

        // set and grab
        proxy.setExtraParam('token', config.api_token);
        proxy.setExtraParam('name', name);
        // use loadPage instead of load to reset page
        store.loadPage(1, {
            scope: this,
            callback: function() {
                this.list.unmask();
            }
        });
    }
});


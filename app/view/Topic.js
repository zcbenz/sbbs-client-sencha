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
                itemTpl: config.topicContentTpl
            }
        ]
    },

    setTopic: function (record) {
        // prevent refreshing same Topic
        if (this.record && this.record == record)
            return;

        this.record = record;
        if (!this.list)
            this.list = this.down('list');

        // refresh view
        this.down('titlebar').setTitle(record.get('title'));
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
        proxy.setExtraParam('board', record.get('board'));
        proxy.setExtraParam('id', record.get('id'));
        // use loadPage instead of load to reset page
        store.loadPage(1, {
            scope: this,
            callback: function() {
                this.list.unmask();
            }
        });
    }
});

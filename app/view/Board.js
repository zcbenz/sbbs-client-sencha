Ext.define('Sbbs.view.Board', {
    extend: 'Ext.Container',
    alias: 'widget.board',
    requires: ['Ext.TitleBar', 'Sbbs.plugin.PullRefresh', 'Sbbs.plugin.ListPaging', 'Sbbs.store.Board'],

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
                    },
                    {
                        id: 'board-change-mode',
                        text: '模式',
                        align: 'right'
                    }
                ]
            },
            {
                flex: 1,

                id: 'board-list',
                xtype: 'list',

                disableSelection: true,
                loadingText: '载入中...',
                plugins: [
                    {
                        xclass: 'Sbbs.plugin.ListPaging',
                        autoPaging: true
                    },
                    {
                        xclass: 'Sbbs.plugin.PullRefresh'
                    }
                ],

                store: Ext.create('Sbbs.store.Board'),
                itemTpl: config.topicItemTpl
            },
            {
                xtype: 'button',
                id: 'board-post-button',
                icon: 'resources/images/add.png',
                iconAlign: 'center',
                right: 8,
                bottom: 10
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
        proxy.setExtraParam('name', name);
        // use loadPage instead of load to reset page
        store.loadPage(1, {
            scope: this,
            callback: function() {
                this.list.unmask();
            }
        });
    },

    onChangeMode: function() {
        if (!this.sheet) {
            this.sheet = Ext.create('Ext.ActionSheet', {
                modal: true,
                hideOnMaskTap: true,
                items: [
                    {
                        text: '普通模式',
                        scope: this,
                        handler: function() {
                            this.doChangeMode(0);
                        }
                    },
                    {
                        text: '主题模式',
                        scope: this,
                        handler: function() {
                            this.doChangeMode(1);
                        }
                    },
                    {
                        text: '论坛模式',
                        scope: this,
                        handler: function() {
                            this.doChangeMode(2);
                        }
                    }
                ]
            });
            Ext.Viewport.add(this.sheet);
        }

        this.sheet.getItems().items[config.boardMode].setUi('confirm');
        this.sheet.show();
    },

    doChangeMode: function(mode) {
        this.sheet.hide();
        if (mode == config.boardMode) return;

        // reset old mode's ui
        this.sheet.getItems().items[config.boardMode].setUi('normal');

        // change mode and force refresh
        config.setBoardMode(mode);
        this.down('list').getStore().loadPage(1);
    }
});


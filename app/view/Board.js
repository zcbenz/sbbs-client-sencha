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
                        id: 'board-back',
                        cls: 'x-button-back',
                        text: '返回'
                    }
                ]
            },
            {
                flex: 1,

                xtype: 'list',

                loadingText: '载入中...',

                itemTpl: '{title}'
            }
        ]
    },

    setBoard: function (record) {
        this.down('titlebar').setTitle(record.get('name'));
    },

    setBoardFromTopic: function (record) {
        this.down('titlebar').setTitle(record.get('board'));
    }
});


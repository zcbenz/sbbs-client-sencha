Ext.define('Sbbs.view.Viewer', {
    extend: 'Ext.navigation.View',
    alias: 'widget.viewer',
    requires: ['Sbbs.view.Topic', 'Sbbs.view.Board'],

    config: {
        navigationBar: {
            hidden: true
        },

        items: [
            { xtype: 'board' },
            { xtype: 'topic' },
        ]
    },

    launch: function () {
        if (this.launched) return;
        this.launched = true;

        this.board = this.getItems().items[0];
        this.topic = this.getItems().items[1];
        this.board.on({
            tap: this.setBoard,
            scope: this
        });
    },

    setBoard: function (board) {
        this.launch();

        this.board.show();
        this.topic.hide();
    },

    setTopic: function (record) {
        this.launch();

        this.topic.setTopic(record);
    }
});


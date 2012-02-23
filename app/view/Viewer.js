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
    },

    setBoard: function (record) {
        this.launch();

        this.board.show();
        this.topic.hide();
        this.board.setBoard(record);
    },

    setBoardFromTopic: function (record) {
        this.launch();

        this.board.show();
        this.topic.hide();
        this.board.setBoardFromTopic(record);
    },

    setTopic: function (record) {
        this.launch();

        this.board.hide();
        this.topic.show();
        this.topic.setTopic(record);
    }
});

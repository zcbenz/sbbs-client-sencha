Ext.define('Sbbs.controller.ReadWrap', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            tabpanel: 'tabpanel'
        },
        control: {
            '#front-list': {
                select: 'onReadTopic'
            },
            '#topten-list': {
                select: 'onReadTopic'
            },
            '#fav-list': {
                leafitemtap: 'onReadBoard'
            },
            '#topic-back': {
                tap: 'onBack'
            },
            '#board-back': {
                tap: 'onBack'
            },
            '#topic-board': {
                tap: 'onTopicToBoard'
            }
        }
    },

    launch: function () {
        if (!this.viewer) {
            this.viewer = Ext.create('Sbbs.view.Viewer');
        }
    },

    onReadTopic: function (list, record) {
        this.launch();

        // show Topic
        this.viewer.setTopic(record);
        this.viewer.topicRecord = record;
        this.getTabpanel().getActiveItem().push(this.viewer);

        // clean list's selection
        list.deselectAll();
    },

    onReadBoard: function (nestedlist, list, index, target, record) {
        this.launch();

        // show board
        this.viewer.setBoard(record);
        this.viewer.boardRecord = record;
        this.getTabpanel().getActiveItem().push(this.viewer);
        list.deselectAll();
    },

    onTopicToBoard: function () {
        this.launch();

        var record = this.viewer.topicRecord;
        this.viewer.setBoardFromTopic(record);
    },

    onBack: function () {
        this.getTabpanel().getActiveItem().pop();
    }
});

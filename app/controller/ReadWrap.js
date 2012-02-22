Ext.define('Sbbs.controller.ReadWrap', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            tabpanel: 'tabpanel',
            backButton1: '#topic-back',
            backButton2: '#board-back'
        },
        control: {
            '#board-list': {
                select: 'onReadTopic'
            },
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
        // create viewer lazily
        if (!this.viewer) {
            this.viewer = Ext.create('Sbbs.view.Viewer');
        }

        // and set the back text according ot current tab
        var id = this.getTabpanel().getActiveItem().getItemId();
        var index = id[id.length - 1] - 1;
        var texts = ['首页', '十大', '收藏夹', '搜索'];
        this.getBackButton1().setText(texts[index]);
        this.getBackButton2().setText(texts[index]);
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

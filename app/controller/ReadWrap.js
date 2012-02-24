Ext.define('Sbbs.controller.ReadWrap', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.ActionSheet'],

    config: {
        refs: {
            tabpanel: 'tabpanel',
            board: 'board',
            topic: 'topic',
            backButton1: '#topic-back',
            backButton2: '#board-back'
        },
        control: {
            '#board-list': {
                itemtap: 'onReadTopic'
            },
            '#front-list': {
                itemtap: 'onReadTopic'
            },
            '#topten-list': {
                itemtap: 'onReadTopic'
            },
            '#topic-list': {
                itemtap: 'onDoTopic'
            },
            '#topboards-list': {
                scope: this,
                itemtap: function(list, index, target, record) {
                    this.onReadBoard(list, list, index, target, record);
                }
            },
            '#fav-list': {
                leafitemtap: 'onReadBoard'
            },
            '#sections-list': {
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
            },
            '#board-change-mode': {
                tap: 'onChangeMode'
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

    onReadTopic: function (list, index, target, record) {
        this.launch();

        // show Topic
        this.viewer.setTopic(record);
        this.viewer.topicRecord = record;
        this.getTabpanel().getActiveItem().push(this.viewer);
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

    onTopicToBoard: function() {
        this.launch();

        var record = this.viewer.topicRecord;
        this.viewer.setBoardFromTopic(record);
    },

    onBack: function() {
        this.getTabpanel().getActiveItem().pop();
    },

    onDoTopic: function(list, index, target, record) {
        if (!this.topicSheet) {
            this.topicSheet = Ext.create('Ext.ActionSheet', {
                modal: true,
                hideOnMaskTap: true,
                items: [
                    {
                        text: '回复',
                        ui: 'confirm',
                        scope: this,
                        handler: function() {
                            this.topicSheet.hide();
                            this.onReply.call(this, this.topicSheet.getRecord());
                        }
                    },
                    {
                        text: '发站内信',
                        scope: this,
                        handler: function() {
                            this.topicSheet.hide();
                            this.onSendMail.call(this, this.topicSheet.getRecord());
                        }
                    },
                    {
                        text: '取消',
                        scope: this,
                        handler: function() {
                            this.topicSheet.hide();
                        }
                    }
                ]
            });
            Ext.Viewport.add(this.topicSheet);
        }

        this.topicSheet.setRecord(record);
        this.topicSheet.show();
    },

    onReply: function(record) {
        if (!Sbbs.app.isLogin()) {
            Sbbs.app.showLogin();
            return;
        }
    },

    onSendMail: function(record) {
        if (!Sbbs.app.isLogin()) {
            Sbbs.app.showLogin();
            return;
        }
    },

    onChangeMode: function() {
        this.getBoard().onChangeMode();
    }
});

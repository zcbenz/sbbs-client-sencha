Ext.define('Sbbs.controller.ReadWrap', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.ActionSheet'],

    config: {
        refs: {
            tabpanel: 'tabpanel',
            board: 'board',
            topic: 'topic',
            favlist: '#fav-list',
            postButton: '#board-post-button',
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
                    list.deselectAll();
                    this.onReadBoard(list, list, index, target, record);
                }
            },
            favlist: {
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
            },
            postButton: {
                tap: 'onBoardPost'
            }
        }
    },

    launch: function () {
        // create viewer
        this.viewer = Ext.create('Sbbs.view.Viewer');

        // add Favorites to login hooks
        config.refreshAfterLogins.push({
            scope: this,
            fn: function() {
                this.getFavlist().getStore().load();
            }
        });
    },

    setButtonText: function() {
        // and set the back text according ot current tab
        var id = this.getTabpanel().getActiveItem().getItemId();
        var index = id[id.length - 1] - 1;
        var texts = ['首页', '十大', '收藏夹', '搜索'];
        this.getBackButton1().setText(texts[index]);
        this.getBackButton2().setText(texts[index]);
    },

    onReadTopic: function (list, index, target, record) {
        this.setButtonText();

        // show Topic
        this.viewer.setTopic(record);
        this.viewer.topicRecord = record;
        this.getTabpanel().getActiveItem().push(this.viewer);

        list.deselectAll();
    },

    onReadBoard: function (nestedlist, list, index, target, record) {
        this.setButtonText();
        list.deselectAll();

        // show board
        this.viewer.setBoard(record);
        this.viewer.boardRecord = record;
        this.getTabpanel().getActiveItem().push(this.viewer);
    },

    onTopicToBoard: function() {
        this.setButtonText();

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
//                    {
//                        text: '发站内信',
//                        scope: this,
//                        handler: function() {
//                            this.topicSheet.hide();
//                            this.onSendMail.call(this, this.topicSheet.getRecord());
//                        }
//                    },
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
        if (!config.isLogin()) {
            config.showLogin();
            return;
        }
        
        this.doShowPost(record);
        this.post.mode = 'reply';
        this.post.setBaseParams({
            type: 1,
            board: record.get('board'),
            reid: record.get('id'),
            token: config.apiToken
        });
    },

    onSendMail: function(record) {
        if (!config.isLogin()) {
            config.showLogin();
            return;
        }

        this.doShowPost(record);
    },

    onBoardPost: function() {
        if (!config.isLogin()) {
            config.showLogin();
            return;
        }

        this.getPostButton().hide();
        this.doShowPost();
        this.post.mode = 'new';
        this.post.setBaseParams({
            type: 1,
            board: this.viewer.boardRecord.get('name'),
            token: config.apiToken
        });

        // show post button again when post dialog is hide
        if (!this.post.hideHook) {
            this.post.hideHook = true;
            this.post.on({
                scope: this,
                hide: function() {
                    this.getPostButton().show();
                }
            });
        }
    },

    doShowPost: function(record) {
        // the post dialog
        if (!this.post)
            this.post = Ext.Viewport.add(Ext.create('Sbbs.view.Post'));

        var title = '';
        if (record) {
            title = record.get('title');
            if (title.substr(0, 3) != 'Re:')
                title = 'Re: ' + title;
        }

        this.post.setValues({
            title: title,
            content: ''
        });
        this.post.show();
        this.post.down('#post-content').focus();
    },

    onChangeMode: function() {
        this.getBoard().onChangeMode();
    }
});

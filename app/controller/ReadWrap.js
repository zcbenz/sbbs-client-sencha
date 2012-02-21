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
            }
        }
    },

    onReadTopic: function (list, record) {
        // FIXME
        // force create new Topic view here due to Sencha's bug
        if (this.topic) {
            this.topic.destroy();
        }
        this.topic = Ext.create('Sbbs.view.Topic');
        this.topic.down("#topic-back").on({
            scope: this,
            tap: this.onTopicBack
        });

        this.getTabpanel().getActiveItem().push(this.topic);
    },

    onTopicBack: function () {
        this.getTabpanel().getActiveItem().pop();
    },

    // Return element on the current active tab
    getElement: function (xtype) {
        return this.getTabpanel().getActiveItem().down(xtype);
    }
});

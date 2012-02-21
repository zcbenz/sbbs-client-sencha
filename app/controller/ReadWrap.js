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
            '#topic-back': {
                tap: 'onTopicBack'
            }
        }
    },

    onReadTopic: function (list, record) {
        // FIXME
        // force create new Viewer view here due to Sencha's bug
        if (!this.viewer) {
            this.viewer = Ext.create('Sbbs.view.Viewer');
        }

        // show Topic
        this.viewer.setTopic(record);
        this.getTabpanel().getActiveItem().push(this.viewer);

        // clean list's selection
        list.deselectAll();
    },

    onTopicBack: function () {
        this.getTabpanel().getActiveItem().pop();
    },

    // Return element on the current active tab
    getElement: function (xtype) {
        return this.getTabpanel().getActiveItem().down(xtype);
    }
});

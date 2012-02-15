Ext.define('Sbbs.controller.Topten', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            '#topten-refresh': {
                tap: 'doRefresh'
            }
        }
    },

    doRefresh: function() {
        var list = Ext.getCmp('topten-list');
        list.getStore().load();
        list.refresh();
    }
});

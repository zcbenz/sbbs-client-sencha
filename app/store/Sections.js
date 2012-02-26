Ext.define('Sbbs.store.Sections', {
    extend: 'Ext.data.TreeStore',

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.apiBase + '/sections.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true,
        listeners: {
            beforeload: function(store) {
                store.getProxy().setExtraParam('token', config.apiToken);
            }
        }
    }
});


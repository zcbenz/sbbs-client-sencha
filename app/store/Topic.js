Ext.define('Sbbs.store.Topic', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        pageSize: 10,

        proxy: {
            type: 'ajax',
            url: config.api_base + '/topic/get.json',
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: false,
        listeners: {
            beforeload: function(store) {
                store.getProxy().setExtraParam('token', config.api_token);
            }
        }
    }
});


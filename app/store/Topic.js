Ext.define('Sbbs.store.Topic', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        pageSize: 10,

        proxy: {
            type: 'ajax',
            url: config.api_base + '/topic/get.json',
            extraParams: {
                token: config.token
            },
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: false
    }
});


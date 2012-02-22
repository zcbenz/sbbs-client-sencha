Ext.define('Sbbs.store.Board', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        pageSize: 10,

        proxy: {
            type: 'ajax',
            url: config.api_base + '/board/get.json',
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


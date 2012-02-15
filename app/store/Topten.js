Ext.define('Sbbs.store.Topten', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/hot/topten.json',
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: true
    }
});

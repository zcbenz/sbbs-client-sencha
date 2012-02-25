Ext.define('Sbbs.store.Topten', {
    extend: 'Ext.data.Store',
    requires: ['Sbbs.model.Topic'],

    config: {
        model: 'Sbbs.model.Topic',
        proxy: {
            type: 'ajax',
            url: config.apiBase + '/hot/topten.json',
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: true
    }
});

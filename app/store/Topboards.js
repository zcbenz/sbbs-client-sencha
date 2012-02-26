Ext.define('Sbbs.store.Topboards', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.apiBase + '/hot/boards.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true
    }
});

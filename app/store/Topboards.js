Ext.define('Sbbs.store.Topboards', {
    extend: 'Ext.data.Store',
    requires: ['Sbbs.model.Board'],

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/hot/board.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true
    }
});

Ext.define('Sbbs.store.Favorites', {
    extend: 'Ext.data.TreeStore',
    requires: ['Sbbs.model.Board'],

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/fav/list.json',
            extraParams: {
                token: config.api_token,
            },
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true
    }
});


Ext.define('Sbbs.store.Favorites', {
    extend: 'Ext.data.TreeStore',

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/fav/list.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true
    }
});


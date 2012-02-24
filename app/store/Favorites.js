Ext.define('Sbbs.store.Favorites', {
    extend: 'Ext.data.TreeStore',
    requires: ['Sbbs.model.Board'],

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
        autoLoad: true,
        listeners: {
            beforeload: function(store) {
                store.getProxy().setExtraParam('token', config.api_token);
            }
        }
    }
});


Ext.define('Sbbs.store.Favorites', {
    extend: 'Ext.data.TreeStore',

    config: {
        model: 'Sbbs.model.Board',
        proxy: {
            type: 'ajax',
            url: config.apiBase + '/fav/list.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: true,
        listeners: {
            beforeload: function(store) {
                // don't show Favorites if not logined
                if (!config.isLogin())
                     return false;

                // automatically set token for loading
                store.getProxy().setExtraParam('token', config.apiToken);
            }
        }
    }
});


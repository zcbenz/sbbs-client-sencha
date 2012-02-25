Ext.define('Sbbs.store.Board', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        pageSize: 10,

        proxy: {
            type: 'ajax',
            url: config.apiBase + '/board/get.json',
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: false,
        listeners: {
            beforeload: function(store) {
                var map = [0, 1, 3];
                var proxy = store.getProxy();
                proxy.setExtraParam('token', config.apiToken);
                proxy.setExtraParam('mode', map[config.boardMode]);
            }
        }
    }
});

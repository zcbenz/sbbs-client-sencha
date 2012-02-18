Ext.define('Sbbs.store.Topics', {
    extend: 'Ext.data.Store',

    board: 'NotSet',
    postId: 'NotSet',

    config: {
        model: 'Sbbs.model.Topic',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/topic/' + this.board + '/' + this.id + '.json',
            reader: {
                type: 'json',
                rootProperty: 'boards'
            }
        },
        autoLoad: false
    }
});


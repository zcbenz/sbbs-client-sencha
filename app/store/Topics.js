Ext.define('Sbbs.store.Topics', {
    extend: 'Ext.data.Store',

    board: 'NotSet',
    postId: 'NotSet',

    config: {
        model: 'Sbbs.model.Topic',
    }
});


Ext.application({
    name: 'Sbbs',

    launch: function() {
        var store = Ext.create('Sbbs.store.Topics', {
            board: 'Test',
            postId: 123
        });
        store.load();
    },

    views: ['ReadWrap', 'Front', 'Search', 'Topten', 'Favorites', 'Topic'],
    controllers: ['Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites', 'Topics', 'SectionHots'],
    profiles: ['Tablet', 'Phone']
});

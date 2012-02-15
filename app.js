Ext.application({
    name: 'Sbbs',

    views: ['Front', 'Topten', 'Favorites'],
    stores: ['Sections', 'Topten'],
    controllers: ['Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    profiles: ['Tablet', 'Phone']
});

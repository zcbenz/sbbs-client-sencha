Ext.application({
    name: 'Sbbs',

    views: ['Front', 'Topten', 'Favorites'],
    controllers: ['Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites'],
    profiles: ['Tablet', 'Phone']
});
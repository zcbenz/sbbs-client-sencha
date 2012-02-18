Ext.application({
    name: 'Sbbs',

    views: ['Front', 'Search', 'Topten', 'Favorites'],
    controllers: ['Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites', 'SectionHots'],
    profiles: ['Tablet', 'Phone']
});

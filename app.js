Ext.application({
    name: 'Sbbs',

    views: ['ReadWrap', 'Front', 'Search', 'Topten', 'Favorites', 'Topic', 'Board', 'Viewer'],
    controllers: ['ReadWrap', 'Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites', 'Topic', 'Board', 'SectionHots'],
    profiles: ['Tablet', 'Phone']
});

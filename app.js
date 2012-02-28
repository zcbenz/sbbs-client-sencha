Ext.application({
    name: 'Sbbs',

    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    icon: 'resources/images/icon.png',
    glossOnIcon: false,

    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites', 'Topic', 'Board', 'SectionHots'],
    views: ['Login', 'ReadWrap', 'FrontWrap', 'Hots', 'Account',
            'Post',
            'Front', 'Sections', 'Topboards', 'Search', 'Topten', 'Favorites',
            'Topic', 'Board', 'Viewer'],
    controllers: ['Post', 'ReadWrap', 'Login', 'Account'],
    profiles: ['Tablet', 'Phone']
});

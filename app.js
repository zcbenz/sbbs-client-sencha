Ext.application({
    name: 'Sbbs',

    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    icon: 'resources/images/icon.png',
    glossOnIcon: false,

    views: ['Login', 'ReadWrap', 'Front', 'Search', 'Topten', 'Favorites', 'Topic', 'Board', 'Viewer'],
    controllers: ['ReadWrap', 'Front', 'Topten', 'Favorites'],
    models: ['Section', 'Board', 'Topic'],
    stores: ['Sections', 'Topten', 'Favorites', 'Topic', 'Board', 'SectionHots'],
    profiles: ['Tablet', 'Phone'],

    showLogin: function() {
        if (!this.login) {
            this.login = Ext.Viewport.add(Ext.create('Sbbs.view.Login'));
        }

        this.login.show();
    }
});

Ext.application({
    name: 'Sbbs',

    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    icon: 'resources/images/icon.png',
    glossOnIcon: false,

    stores: ['Sections', 'Topten', 'Favorites', 'Topic', 'Board', 'SectionHots'],
    views: ['Login', 'ReadWrap', 'FrontWrap', 'Hots', 'Account',
            'Front', 'Sections', 'Topboards', 'Search', 'Topten', 'Favorites',
            'Topic', 'Board', 'Viewer'],
    controllers: ['ReadWrap', 'Login', 'Account'],
    models: ['Section', 'Board', 'Topic'],
    profiles: ['Tablet', 'Phone'],

    refreshAfterLogins: [],

    showLogin: function() {
        if (!this.login) {
            this.login = Ext.Viewport.add(Ext.create('Sbbs.view.Login'));
        }

        this.login.show();
    },

    isLogin: function() {
        return !!config.api_token;
    }
});

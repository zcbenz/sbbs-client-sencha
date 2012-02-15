Ext.define('Sbbs.profile.Tablet', {
    extend: 'Ext.app.Profile',
    
    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Tablet;// || Ext.os.is.Desktop;
    },

    launch: function() {
        Ext.create('Sbbs.view.tablet.Main');
    }
});

Ext.define('Sbbs.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Phone || Ext.os.is.Desktop;
    },

    launch: function() {
        Ext.create('Sbbs.view.phone.Main');
    }
});

Ext.define('Sbbs.view.tablet.Main', {
    extend: 'Ext.Container',

    config: {
        fullscreen: true,
        layout: 'card',
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '虎踞龙蟠BBS',

                items: [
                ]
            }
        ]
    },

    initialize: function() {
    }
});

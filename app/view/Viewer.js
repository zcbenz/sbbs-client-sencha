Ext.define('Sbbs.view.Viewer', {
    extend: 'Ext.navigation.View',
    alias: 'widget.viewer',

    config: {
        navigationBar: {
            hidden: true
        },

        items: [
            { xtype: 'Sbbs.view.Topic' },
            { xtype: 'Sbbs.view.Board' }
        ]
    }
});


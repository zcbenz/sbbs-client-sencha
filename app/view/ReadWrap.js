Ext.define('Sbbs.view.ReadWrap', {
    extend: 'Ext.navigation.View',
    alias: 'widget.readwrap',
    requires: ['Sbbs.view.Topic'],

    config: {

        items: [
            { xtype: 'topic' }
        ]
    }
});
Ext.define('Sbbs.view.ReadWrap', {
    extend: 'Ext.navigation.View',
    alias: 'widget.readwrap',
    requires: ['Sbbs.view.Topic'],

    config: {
        autoDestroy: false,

        navigationBar: {
            hidden: true
        }
    }
});

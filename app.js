Ext.require([
    'Ext.TitleBar'
]);

Ext.application({
    name: 'Sbbs',

//    models: ['User', 'HomePage'],
    views: ['Main'],

    launch: function() {
        Ext.Viewport.add(Ext.create('Sbbs.view.Main'));
    }
});

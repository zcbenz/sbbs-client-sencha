Ext.define('Sbbs.view.Hots', {
    extend: 'Ext.Carousel',
    xtype: 'hots',
    requires: ['Sbbs.view.Topten', 'Sbbs.view.Topboards'],

    config: {
        items: [
            { xtype: 'topten' },
            { xtype: 'topboards' },
        ]
    }
});

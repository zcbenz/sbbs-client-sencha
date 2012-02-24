Ext.define('Sbbs.view.FrontWrap', {
    extend: 'Ext.Carousel',
    xtype: 'frontwrap',
    requires: ['Sbbs.view.Front', 'Sbbs.view.Sections'],

    config: {
        items: [
            { xtype: 'front' },
            { xtype: 'sections' },
        ]
    }
});

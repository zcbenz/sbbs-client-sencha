Ext.define('Sbbs.store.Sections', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Section',
        proxy: {
            type: 'ajax',
            url: config.api_base + '/sections.json',
            reader: {
                type: 'json',
                rootProperty: 'sections'
            }
        },
        autoLoad: true
    }
});


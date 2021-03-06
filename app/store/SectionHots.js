Ext.define('Sbbs.store.SectionHots', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sbbs.model.Topic',
        grouper: {
            groupFn: function(record) {
                return record.get('section');
            }
        },
        proxy: {
            type: 'ajax',
            url: config.apiBase + '/hot/topics.json',
            extraParams: {
                flat: true
            },
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },
        autoLoad: true
    }
});

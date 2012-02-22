Ext.define('Sbbs.store.SectionHots', {
    extend: 'Ext.data.Store',
    requires: ['Sbbs.model.Topic'],

    config: {
        model: 'Sbbs.model.Topic',
        grouper: {
            groupFn: function(record) {
                return record.get('section');
            }
        },
        proxy: {
            type: 'ajax',
            url: config.api_base + '/hot/topics.json',
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

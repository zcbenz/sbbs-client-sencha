Ext.define('Sbbs.model.Section', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['description'],
        hasMany: {model: 'Board', name: 'boards'},
    }
});

Ext.define('Sbbs.view.Sections', {
    extend: 'Ext.dataview.NestedList',
    alias: 'widget.sections',
    requires: ['Sbbs.store.Sections'],

    config: {
        id: 'sections-list',

        title: '分区列表',
        loadingText: '载入中...',
        displayField: 'description',

        toolbar: {
            docked: 'top',
            xtype: 'titlebar',
            ui: 'dark'
        },

        store: Ext.create('Sbbs.store.Sections'),
    },

    getItemTextTpl: function() {
        return '<span><tpl if="leaf !== true"><img src="resources/images/folder.png"/><tpl elseif="unread == 1"><img src="resources/images/unread.png"/><tpl else><img src="resources/images/favorite.png"/></tpl>{' + this.getDisplayField() + '}</span>';
    }
});

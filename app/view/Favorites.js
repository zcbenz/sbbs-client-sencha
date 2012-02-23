Ext.define('Sbbs.view.Favorites', {
    extend: 'Ext.dataview.NestedList',
    alias: 'widget.favorites',
    requires: ['Sbbs.store.Favorites'],

    config: {
        id: 'fav-list',

        title: '收藏夹',
        loadingText: '载入中...',
        displayField: 'description',

        toolbar: {
            docked: 'top',
            xtype: 'titlebar',
            ui: 'dark'
        },

        store: Ext.create('Sbbs.store.Favorites'),
    },

    getItemTextTpl: function() {
        return '<span><tpl if="leaf !== true"><img src="resources/imgs/folder.png"/><tpl elseif="unread == 1"><img src="resources/imgs/unread.png"/><tpl else><img src="resources/imgs/favorite.png"/></tpl>{' + this.getDisplayField() + '}</span>';
    }
});

Ext.define('Sbbs.view.Favorites', {
    extend: 'Ext.Container',
    alias: 'widget.favorites',
    requires: ['Ext.dataview.NestedList', 'Sbbs.plugin.PullRefresh', 'Sbbs.store.Favorites'],

    config: {
        title: '收藏夹',
        layout: 'vbox',

        items: [
            {
                id: 'fav-list',
                xtype: 'nestedlist',
                flex: 1,
                title: '收藏夹',
                loadingText: '载入中...',
                displayField: 'description',
                emptyText: '收藏夹显示错误',

                toolbar: {
                    docked: 'top',
                    xtype: 'titlebar',
                    ui: 'dark'
                },

                getItemTextTpl: function() {
                    return '<span><tpl if="leaf !== true"><img src="resources/imgs/folder.png"/><tpl elseif="unread == 1"><img src="resources/imgs/unread.png"/><tpl else><img src="resources/imgs/favorite.png"/></tpl>{' + this.getDisplayField() + '}</span>';
                },

                store: Ext.create('Sbbs.store.Favorites'),
            }
        ]
    }
});

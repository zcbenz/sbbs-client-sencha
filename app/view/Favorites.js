Ext.define('Sbbs.view.Favorites', {
    extend: 'Ext.Container',
    alias: 'widget.favorites',

    config: {
        items: [
            {
                xtype: 'titlebar',
                title: '收藏夹',

                items: [
                    {
                        text: '编辑',
                    },
                    {
                        text: '刷新',
                        align: 'right'
                    }
                ]
            }
        ]
    }
});

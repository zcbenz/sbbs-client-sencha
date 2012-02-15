Ext.define('Sbbs.view.Topten', {
    extend: 'Ext.Container',
    alias: 'widget.topten',

    config: {
        items: [
            {
                xtype: 'titlebar',
                title: '十大话题',

                items: [
                    {
                        text: '刷新',
                        align: 'right'
                    }
                ]
            },
            {
                id: 'toptenList',
                xtype: 'list'
            }
        ]
    }
});

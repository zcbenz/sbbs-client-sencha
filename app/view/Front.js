Ext.define('Sbbs.view.Front', {
    extend: 'Ext.Container',
    alias: 'widget.front',

    config: {
        items: [
            {
                xtype: 'titlebar',
                title: '虎踞龙蟠BBS',

                items: [
                    {
                        text: '刷新',
                        align: 'right'
                    }
                ]
            }
        ]
    }
});

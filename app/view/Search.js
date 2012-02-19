Ext.define('Sbbs.view.Search', {
    extend: 'Ext.Container',
    alias: 'widget.search',
    requires: ['Ext.TitleBar', 'Ext.form.FieldSet'],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                title: '搜索',
            },
            {
                xtype: 'fieldset',

                title: '版面跳转',
                items: [
                    {
                        xtype: 'textfield'
                    },
                    {
                        xtype: 'button',
                        text: '跳转'
                    }
                ]
            },
            {
                xtype: 'fieldset',

                title: '文章搜索',
                items: [
                    {
                        xtype: 'textfield'
                    },
                    {
                        xtype: 'button',
                        text: '搜索'
                    }
                ]
            }
        ]
    }
});

Ext.define('Sbbs.view.Account', {
    extend: 'Ext.form.Panel',
    xtype: 'account',
    requires: ['Sbbs.plugin.ButtonField'],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: '欢迎',
                items: [
                    {
                        xtype: 'buttonfield',
                        label: '登录'
                    }
                ]
            }
        ]
    }
});

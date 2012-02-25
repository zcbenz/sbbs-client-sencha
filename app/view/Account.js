Ext.define('Sbbs.view.Account', {
    extend: 'Ext.form.Panel',
    xtype: 'account',
    requires: ['Sbbs.plugin.ButtonField'],

    config: {
        items: [
            {
                id: 'account-login-set',
                xtype: 'fieldset',
                title: '欢迎，请登录',
                items: [
                    {
                        id: 'account-login',
                        xtype: 'buttonfield',
                        label: '登录'
                    },
                    {
                        hidden: true,
                        id: 'account-changeuser',
                        xtype: 'buttonfield',
                        label: '更换用户'
                    },
                    {
                        hidden: true,
                        id: 'account-logout',
                        xtype: 'buttonfield',
                        label: '退出'
                    }
                ]
            }
        ]
    }
});

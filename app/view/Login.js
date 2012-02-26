Ext.define('Sbbs.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: ['Ext.field.Password'],

    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        width: 300,
        height: 200,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'user',
                        label: '用户名'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'pass',
                        label: '密码'
                    }
                ]
            },
            {
                layout: 'hbox',
                items: [
                    {
                        flex: 1,
                        xtype: 'button',
                        text: '取消',
                        scope: this,
                        handler: function() {
                            config.login.hide();
                        }
                    },
                    {
                        width: 10
                    },
                    {
                        flex: 2,
                        id: 'login-button',
                        xtype: 'button',
                        ui: 'confirm',
                        text: '登录',
                    }
                ]
            }
        ],
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        }
    }
});

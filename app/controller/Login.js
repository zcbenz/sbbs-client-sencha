Ext.define('Sbbs.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            login: 'login'
        },
        control: {
            '#login-button': {
                tap: 'onLogin'
            }
        }
    },

    onLogin: function() {
        this.getLogin().submit({
            url: config.api_base + '/token.json',
            method: 'POST',
            waitMsg: '登录中...',
            success: function(form, result) {
                config.setApiToken(result.token);
                form.hide();
            },
            failure: function(form, result) {
                if (!result)
                    Ext.Msg.alert('错误', '无法连接到服务器', Ext.emptyFn);
                else
                    Ext.Msg.alert('错误', '用户名密码错误', Ext.emptyFn);
            }
        });
    }
});

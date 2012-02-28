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
        this.getLogin().setMasked({
            xtype: 'loadmask',
            message: '登录中...'
        });
        this.getLogin().submit({
            url: config.apiBase + '/token.json',
            method: 'POST',
            success: function(form, result) {
                // update api token
                config.setApiToken(result);

                // refresh views
                for (i in config.refreshAfterLogins) {
                    var obj = config.refreshAfterLogins[i];
                    obj.fn.call(obj.scope);
                }

                form.unmask();
                form.hide();
            },
            failure: function(form, result) {
                form.unmask();
                if (!result)
                    Ext.Msg.alert('错误', '无法连接到服务器', Ext.emptyFn);
                else
                    Ext.Msg.alert('错误', '用户名密码错误', Ext.emptyFn);
            }
        });
    }
});

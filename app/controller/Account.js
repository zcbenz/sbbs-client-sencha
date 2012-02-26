Ext.define('Sbbs.controller.Account', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginSet: '#account-login-set',
            login: '#account-login',
            logout: '#account-logout',
            changeuser: '#account-changeuser'
        },
        control: {
            login: {
                tap: 'onLogin'
            },
            logout: {
                tap: 'onLogout'
            },
            changeuser: {
                tap: 'onLogin'
            }
        }
    },

    launch: function() {
        if (!!this.logined != config.isLogin())
            this.refreshOnLogin();

        config.refreshAfterLogins.push({
            scope: this,
            fn: this.refreshOnLogin
        });
    },

    refreshOnLogin: function() {
        this.logined = config.isLogin();

        // change to unlogined mode
        if (!this.logined) {
            this.getLoginSet().setTitle('欢迎，请登录');
            this.getLogin().show();
            this.getLogout().hide();
            this.getChangeuser().hide();
        } else {
            this.getLoginSet().setTitle('欢迎，' + config.userId);
            this.getLogin().hide();
            this.getLogout().show();
            this.getChangeuser().show();
        }
    },

    onLogin: function() {
        config.showLogin();
    },

    onLogout: function() {
        config.setApiToken({});

        // refresh views
        for (i in config.refreshAfterLogins) {
            var obj = config.refreshAfterLogins[i];
            obj.fn.call(obj.scope);
        }
    }
});

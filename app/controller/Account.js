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
        if (!!this.logined != Sbbs.app.isLogin())
            this.refreshOnLogin();

        Sbbs.app.refreshAfterLogins.push({
            scope: this,
            fn: this.refreshOnLogin
        });
    },

    refreshOnLogin: function() {
        this.logined = Sbbs.app.isLogin();

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
        Sbbs.app.showLogin();
    },

    onLogout: function() {
        config.setApiToken({});

        // refresh views
        for (i in Sbbs.app.refreshAfterLogins) {
            var obj = Sbbs.app.refreshAfterLogins[i];
            obj.fn.call(obj.scope);
        }
    }
});

Ext.define('Sbbs.controller.phone.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'tabpanel': {
                activeitemchange: 'onTabChange'
            }
        }
    },

    onTabChange: function(tabpanel, value) {
        // hook show of Favorites
        if ('ext-readwrap-3' == value.getItemId()) {
            // require login
            if (!Sbbs.app.isLogin())
                window.setTimeout('Sbbs.app.showLogin()', 400);
        }
    }
});

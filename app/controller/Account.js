Ext.define('Sbbs.controller.Account', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'buttonfield': {
                tap: 'test'
            }
        }
    },

    test: function() {
        alert('test');
    }
});

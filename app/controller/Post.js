Ext.define('Sbbs.controller.Post', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            post: 'post'
        },
        control: {
            '#post-cancel': {
                tap: 'onHide'
            }
        }
    },

    onHide: function() {
        this.getPost().hide();
    }
});

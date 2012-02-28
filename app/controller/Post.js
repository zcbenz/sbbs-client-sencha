Ext.define('Sbbs.controller.Post', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            post: 'post'
        },
        control: {
            '#post-cancel': {
                tap: 'onHide'
            },
            '#post-button': {
                tap: 'onPost'
            }
        }
    },

    onHide: function() {
        this.getPost().hide();
    },

    onPost: function() {
        var post = this.getPost();
        post.setMasked({
            xtype: 'loadmask',
            message: '发布中...'
        });

        post.submit({
            url: config.apiBase + '/topic/post.json',
            method: 'POST',
            success: function(form, result) {
                form.unmask();
                form.hide();
            },
            failure: function(form, result) {
                form.unmask();
                if (!result)
                    Ext.Msg.alert('错误', '无法连接到服务器', Ext.emptyFn);
                else
                    Ext.Msg.alert('错误', result.error, Ext.emptyFn);
            }
        });
    }
});

Ext.define('Sbbs.view.Post', {
    extend: 'Ext.form.Panel',
    xtype: 'post',

    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        width: 300,
        height: 344,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: '标题'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'content',
                        label: '内容',
                        maxRows: 8
                    }
                ]
            },
            {
                layout: 'hbox',
                items: [
                    {
                        flex: 1,
                        id: 'post-cancel',
                        xtype: 'button',
                        text: '取消'
                    },
                    {
                        width: 10
                    },
                    {
                        flex: 2,
                        id: 'post-button',
                        xtype: 'button',
                        ui: 'confirm',
                        text: '发布',
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

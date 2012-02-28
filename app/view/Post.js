Ext.define('Sbbs.view.Post', {
    extend: 'Ext.form.Panel',
    xtype: 'post',

    config: {
        modal: true,
        hideOnMaskTap: true,
        centered: true,
        width: 300,
        height: 448,
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        id: 'post-title',
                        xtype: 'textfield',
                        clearIcon: false,
                        name: 'title',
                        labelAlign: 'top',
                        label: '标题'
                    },
                    {
                        id: 'post-content',
                        xtype: 'textareafield',
                        clearIcon: false,
                        name: 'content',
                        labelAlign: 'top',
                        label: '内容',
                        maxRows: 9
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

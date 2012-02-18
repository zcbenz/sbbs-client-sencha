Ext.define('Sbbs.view.Front', {
    extend: 'Ext.Container',
    alias: 'widget.front',

    config: {
        layout: 'vbox',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: '虎踞龙蟠BBS',

                items: [
                    {
                        text: '刷新',
                        align: 'right'
                    }
                ]
            },
            {
                flex: 1,
                xtype: 'list',
                id: 'front-sectionhots',
                loadingText: '载入中...',
                emptyText: '无法获取分区热点',

                store: Ext.create('Sbbs.store.SectionHots'),
                itemTpl: '{title}',
                grouped: true,
                pinHeaders: false,

                // mannualy change group header to Chinese
                listeners: {
                    painted: function() {
                        if (this.hasShowed) return;
                        this.hasShowed = true;
                        var headers = Ext.query('#front-sectionhots .x-list-header');
                        var arr = ['本站系统', '东南大学', '电脑技术', '学术科学', '艺术文化', '乡情校谊', '休闲娱乐', '知性感性', '人文信息', '体坛风暴', '校务信箱', '社团群体'];
                        for (i in headers) {
                            headers[i].innerText = arr[headers[i].innerText];
                        }
                    }
                }
            }
        ]
    }
});

Ext.define('Sbbs.controller.Front', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            list: 'list',
            refresh: '#front-refresh'
        },
        control: {
            refresh: {
                tap: 'onRefresh'
            }
        }
    },

    launch: function() {
        this.onRefresh.call(this);
    },

    onRefresh: function() {
        this.getList().getStore().load(this.refreshHeaders);
    },

    // custom headers
    refreshHeaders: function(records) {
        var headers = Ext.query('#front-sectionhots .x-list-header');
        var arr = ['本站系统', '东南大学', '电脑技术', '学术科学', '艺术文化', '乡情校谊', '休闲娱乐', '知性感性', '人文信息', '体坛风暴', '校务信箱', '社团群体'];
        for (i in headers) {
            headers[i].innerText = arr[headers[i].innerText];
        }
    }
});

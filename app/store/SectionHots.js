Ext.define('Sbbs.store.SectionHots', {
    extend: 'Ext.data.Store',
    requires: ['Sbbs.model.Topic'],

    config: {
        model: 'Sbbs.model.Topic',
        grouper: {
            groupFn: function(record) {
                return record.get('section');
            }
        },
        proxy: {
            type: 'ajax',
            url: config.api_base + '/hot/topics.json',
            extraParams: {
                flat: true
            },
            reader: {
                type: 'json',
                rootProperty: 'topics'
            }
        },

        // custom headers
        listeners: {
            load: function (store, records) {
                var headers = Ext.query('#front-list .x-list-header');
                var arr = ['本站系统', '东南大学', '电脑技术', '学术科学', '艺术文化', '乡情校谊', '休闲娱乐', '知性感性', '人文信息', '体坛风暴', '校务信箱', '社团群体'];
                for (i in headers) {
                    headers[i].innerText = arr[headers[i].innerText];
                }
            }
        },

        autoLoad: true
    }
});

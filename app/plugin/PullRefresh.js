Ext.define('Sbbs.plugin.PullRefresh', {
    extend: 'Ext.plugin.PullRefresh',

    config: {
        pullRefreshText: '下拉以刷新',
        releaseRefreshText: '松开后刷新',
        loadingText: '载入中...',
        pullTpl: [
            '<div class="x-list-pullrefresh">',
                '<div class="x-list-pullrefresh-wrap">',
                    '<h3 class="x-list-pullrefresh-message">{message}</h3>',
                    '<div class="x-list-pullrefresh-updated">上次更新: <span>{lastUpdated:date("m/d/Y h:iA")}</span></div>',
                '</div>',
            '</div>'
        ].join('')
    }
});

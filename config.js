var config = {
    // Item Tpl Settings
    frontItemTpl: [
        '<tpl if="replies &gt; 10">',
        '<div class="topic-list-item hot">',
        '<tpl else>',
        '<div class="topic-list-item">',
        '</tpl>',
            '<tpl if="unread === true">',
            '<div class="unread title">',
            '<tpl else>',
            '<div class="title">',
            '</tpl>',
                '{title}',
            '</div>',
            '<div class="info">',
                '<span class="author">{author} 在 {board} 版</span>',
                '<span class="visits">{replies} / {read}</span>',
            '</div>',
        '</div>'
    ].join(''),

    topicItemTpl: [
        '<tpl if="replies &gt; 10">',
        '<div class="topic-list-item hot">',
        '<tpl else>',
        '<div class="topic-list-item">',
        '</tpl>',
            '<tpl if="unread === true">',
            '<div class="unread title">',
            '<tpl else>',
            '<div class="title">',
            '</tpl>',
                '{title}',
            '</div>',
            '<div class="info">',
                '<span class="author">{author}</span> 在 ',
                '<span class="time">{[timestamp2date(values.time)]}</span>',
                '<tpl if="replies">',
                '<span class="visits">{replies} / {read+0}</span>',
                '<tpl else>',
                '<span class="visits">{read+0}</span>',
                '</tpl>',
            '</div>',
        '</div>'
    ].join(''),

    // API Settings
    api_token: 'Zm9vbA==:==wdlloHYLkEW0n2ltyx5QKO',
    api_base: 'http://bbs.seu.edu.cn/napi',

    set_api_token: function (token) {
        config.api_token = token;
        localStorage.api_token = token;
    }
}

if ('api_token' in localStorage) {
    config.api_token = localStorage.api_token;
}

function timestamp2date(time) {
    var date = new Date(time * 1000);
    var now = new Date();
    if (now.getDay() == date.getDay() && now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear())
        return date.getHours() + ':' + date.getMinutes();
    else
        return (date.getMonth() + 1) + '月' + date.getDay() + '日, ' + date.getHours() + ':' + date.getMinutes();
}

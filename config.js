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
            '<tpl elseif="top === true">',
            '<div class="top title">',
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

    topicContentTpl: [
        '<div class="topic-content-item">',
            '<div class="info">',
                '<span class="author">{author}</span>',
                '<span class="time">{[timestamp2date(values.time)]}</span>',
            '</div>',
            '<div class="content">',
                '{[topic_content_parse(values.content)]}',
            '</div>',
        '</div>'
    ].join(''),

    // Board mode
    boardMode: 2,
    setBoardMode: function(mode) {
        config.boardMode = mode;
        localStorage.boardMode = mode;
    },

    // API Settings
    api_token: '',
    api_base: 'http://bbs.seu.edu.cn/napi',

    setApiToken: function (token) {
        config.api_token = token;
        localStorage.api_token = token;
    }
}

if ('api_token' in localStorage) {
    config.api_token = localStorage.api_token;
}
if ('boardMode' in localStorage) {
    config.boardMode = localStorage.boardMode;
}

function timestamp2date(time) {
    var date = new Date(time * 1000);
    var hour = time_padding_2(date.getHours());
    var minute = time_padding_2(date.getMinutes());

    var now = new Date();

    if (now.getDay() == date.getDay() && now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear())
        return hour + ':' + minute;
    else if (now.getFullYear() == date.getFullYear())
        return (date.getMonth() + 1) + '月' + date.getDay() + '日, ' + hour + ':' + minute;
    else
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDay() + '日, ' + hour + ':' + minute;
}

function time_padding_2(time) {
    if (time.length < 2)
        return '0' + time;
    else
        return time;
}

function topic_content_parse(str) {
    return str.replace(/\n/g, '<br />');
}

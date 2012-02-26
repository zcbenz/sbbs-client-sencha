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
        '<tpl if="mark">',
        '<div class="topic-content-item mark">',
        '<tpl else>',
        '<div class="topic-content-item">',
        '</tpl>',
            '<div class="info">',
                '<span class="author">{author}</span>',
                '<span class="time">{[timestamp2date(values.time)]}</span>',
            '</div>',
            '<div class="content">',
                '{[topic_content_parse(values.content)]}',
            '</div>',
            '<tpl if="quote">',
                '<div class="quote">',
                    '<div class="quoter">引自{quoter}</div>',
                    '{[topic_content_parse(values.quote)]}',
                '</div>',
            '</tpl>',
        '</div>'
    ].join(''),

    attributes: ['apiToken', 'boardMode', 'userId', 'userName'],

    // Board mode
    boardMode: 2,
    setBoardMode: function(mode) {
        localStorage.boardMode = config.boardMode = mode;
    },

    // API Settings
    apiToken: '',
    apiBase: 'http://bbs.seu.edu.cn/napi',

    setApiToken: function (token) {
        localStorage.apiToken = config.apiToken = token.token ? token.token : '';
        localStorage.userId   = config.userId   = token.id    ? token.id    : '';
        localStorage.userName = config.userName = token.name  ? token.name  : '';
    },
    
    // login related stuff
    refreshAfterLogins: [],

    showLogin: function() {
        if (!config.loginDlg) {
            config.loginDlg = Ext.Viewport.add(Ext.create('Sbbs.view.Login'));
        }

        config.loginDlg.show();
    },

    isLogin: function() {
        return !!config.apiToken;
    }
}

// read from localStorage
for (i in config.attributes) {
    var name = config.attributes[i];
    if (name in localStorage)
        config[name] = localStorage[name];
}

function timestamp2date(time) {
    var date = new Date(time * 1000);
    var hour = time_padding_2(date.getHours());
    var minute = time_padding_2(date.getMinutes());

    var now = new Date();

    if (now.getDay() == date.getDay() && now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear())
        return hour + ':' + minute;
    else if (now.getFullYear() == date.getFullYear())
        return (date.getMonth() + 1) + '月' + (date.getDay() + 1) + '日, ' + hour + ':' + minute;
    else
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + (date.getDay() + 1) + '日, ' + hour + ':' + minute;
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

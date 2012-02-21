var config = {
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

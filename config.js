var config = {
    // API Settings
    api_token: '',
    api_base: 'http://127.0.0.1/napi',

    set_api_token: function (token) {
        config.api_token = token;
        localStorage.api_token = token;
    }
}

if ('api_token' in localStorage) {
    config.api_token = localStorage.api_token;
}

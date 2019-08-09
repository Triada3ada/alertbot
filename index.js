const rp = require('request-promise');
require('dotenv').config()
const error_msg = require('./bot/index')
const options = {
    method: 'GET',
    uri: 'http://212.42.101.187:3228/captcha',
    qs: {
        pin: '22206197700286',
        plate: 'b9999s',
        captcha: '',
        device: 'ios'
        // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};
const alert = () => {
    rp(options)
        .then(function (res) {
            // Process html...
            console.log(res);

        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err);
            error_msg()
            error_msg('-276159505');
        });
}
setInterval(alert, 1000 * 60 * 60);
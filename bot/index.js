const telegram = require('telegram-bot-api');
require('dotenv').config()

const api = new telegram({
    token: process.env.TELEGRAM_TOKEN
});



const error_msg = (chat_id = '353564338',text = 'SERVER DOWN') => {
    api.sendMessage({
            chat_id: chat_id,
            text: text
        })
        .then(function (data) {
            console.log(util.inspect(data, false, null));
        })
        .catch(function (err) {
            console.log(err);
        });
}
module.exports = error_msg
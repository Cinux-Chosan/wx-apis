const rp = require('request-promise-native');


const wxapiData = require('../data/wxapi-data');




function getAccessToken() { 
    return rp({
        method: 'GET',
        uri: 'https://api.weixin.qq.com/cgi-bin/token',
        qs: wxapiData
    });
}



module.exports = {
    getAccessToken
}
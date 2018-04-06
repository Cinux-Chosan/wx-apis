const rp = require('request-promise-native');


const wxapiData = require('../data/wxapi-data');




function getAccessToken() { 
    return getJson('https://api.weixin.qq.com/cgi-bin/token', wxapiData);
}

async function getJsapiTicket(access_token) {
    if (!access_token) {
        let r = await getAccessToken();
        access_token = r.access_token;
    }
    let params = {
        access_token,
        type: 'jsapi'
    }
    return getJson('https://api.weixin.qq.com/cgi-bin/ticket/getticke', params);
}


function getJson(uri, data, method='GET') {
    return rp({
        method,
        uri,
        qs: data,
        body: method.toLowerCase() === 'post' ?  data : null
    })
}

module.exports = {
    getAccessToken,
    getJsapiTicket
}
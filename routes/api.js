var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var request = require('request');
var util = require('util');
var token = 'cqmanlong';

var { getAccessToken } = require('../utils/wx');

/* GET users listing. */
router.get('/business', function(req, res, next) {
  console.log(req.headers.host, req.url, req.ip);
  try {
    let { signature, timestamp, nonce, echostr } = req.query;
    let arr = [timestamp, nonce, token].sort();
    let result = getSha1(arr.join(''));
    if (result === signature) {
      res.end(echostr);
    } else {
      res.end('参数缺失!');
    }
  } catch (error) {
      res.end(undefined);
  }
});

router.post('/business', function(req, res, next) {
  console.log(req.body);
  res.end(util.inspect(req.body));
})

router.get('/getAccessToken', async (req, res) => {
  res.end(util.inspect(await getAccessToken()));
})


module.exports = router;

function getSha1(str) {
  var sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  sha1.update(str);
  var res = sha1.digest("hex");  //加密后的值d
  return res;
}

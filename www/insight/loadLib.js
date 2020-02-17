// must copy to webapp/src/insight

// 紀錄domain用,不一定跟load script一樣
var insightDomain = 'eb.ctbcbank.com';
// 取得insight collection js lib
function loadInsightLib(){
	loadJs('https://eb.ctbcbank.com/jscollection/WebConnector-app.js?' + new Date().getTime(), function(){});
}
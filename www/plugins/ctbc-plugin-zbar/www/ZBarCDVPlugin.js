cordova.define("ctbc-plugin-zbar.ZBarCDVPlugin", function(require, exports, module) {
/* JavaScript content from inc/zbar/js/ZBarCDVPlugin.js in folder common */


var exec = require('cordova/exec');
	
var ZBarCDVPlugin = {
    showZbar: function (resultCallback, errorCallback, options) {
		cordova.exec(resultCallback, errorCallback, "ZBarCDVPlugin", "showZbar", 
		[options.scanType, options.x, options.y, options.width, options.height, options.maxWidth, options.maxHeight]);
	},
	showImagePicker: function (resultCallback, errorCallback, options) {
		var opt = options || {};
		var reqWidth = opt.reqWidth || 300;
		var reqHeight = opt.reqHeight || 300;
	    cordova.exec(resultCallback, errorCallback, "ZBarCDVPlugin", "showImagePicker", [reqWidth, reqHeight]);
	},   
	/*galleryImgToBase64: function (resultCallback,  cancelCallback, errorCallback) {
	    cordova.exec( function (arg) {
			if (arg == null) { 
	        	cancelCallback();
	        } else {
	        	resultCallback(arg);
	        }
		}, errorCallback, "ZBarCDVPlugin", "galleryImgToBase64", []);
	},   
	cameraImgToBase64: function (resultCallback,  cancelCallback, errorCallback) {
	    cordova.exec(resultCallback, errorCallback, "ZBarCDVPlugin", "cameraImgToBase64", []);
	},*/
	stopZbar: function (resultCallback, errorCallback) {
	    cordova.exec(resultCallback, errorCallback, "ZBarCDVPlugin", "stopZbar", []);
	},
	pauseZbar: function (resultCallback, errorCallback) {
	    cordova.exec(resultCallback, errorCallback, "ZBarCDVPlugin", "pauseZbar", []);
	}
};
	
module.exports = ZBarCDVPlugin;
});

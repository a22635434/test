cordova.define("ctbc-plugin-device-util.DeviceUtil", function(require, exports, module) {
function DeviceUtil() {
    
}

DeviceUtil.prototype.requestAlbumPermission = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "requestAlbumPermission", // action
        []
    );
};

DeviceUtil.prototype.saveToPhotoAlbum = function (base64Img, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "saveToPhotoAlbum", // action
        [base64Img]
    );
};

DeviceUtil.prototype.getStatusBarHeight = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "getStatusBarHeight", // action
        []
    );
};

DeviceUtil.prototype.setTextZoom = function (textZoom, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "setTextZoom", // action
        [textZoom]
    );
};

DeviceUtil.prototype.hasSpeechPermission = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "hasSpeechPermission", // action
        []
    );
};

DeviceUtil.prototype.copyTxt = function (txt, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "copyTxt", // action
        [txt]
    );
};

DeviceUtil.prototype.startApp = function (appScheme, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "startApp", // action
        [appScheme]
    );
};

DeviceUtil.prototype.writePromotionsToNativeStorage = function (promotions, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "writePromotionsToNativeStorage", // action
        [promotions]
    );
};

DeviceUtil.prototype.getNewlyTriggeredPromotions = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "getNewlyTriggeredPromotions", // action
        []
    );
};

DeviceUtil.prototype.markPromotionTriggered = function (promotionIDs, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "markPromotionTriggered", // action
        [promotionIDs]
    );
};

DeviceUtil.prototype.getBeaconRegions = function (successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "getBeaconRegions", // action
        []
    );
};

DeviceUtil.prototype.getMessageNumberForClickedPromotion = function (promotion, successCallback, errorCallback) {
    cordova.exec(
        successCallback,
        errorCallback,
        "CTBCDeviceUtil",  // Java Class
        "getMessageNumberForClickedPromotion", // action
        [promotion]
    );
};

CTBCDeviceUtil = new DeviceUtil();
module.exports = CTBCDeviceUtil;
});

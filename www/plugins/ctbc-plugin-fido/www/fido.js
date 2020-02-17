cordova.define("ctbc-plugin-fido.fido", function(require, exports, module) {

var exec = require('cordova/exec');


var Fido = function() {
};

Fido.initialize = function(success, fail) {
    exec(success, fail, "Fido", "initialize", []);
};

Fido.getDeviceDataFIDO = function(success, fail) {
    exec(success, fail, "Fido", "getDeviceDataFIDO", []);
};

Fido.getCustSeqFIDO = function(success, fail) {
    exec(success, fail, "Fido", "getCustSeqFIDO", []);
};

Fido.genDeviceFIDO = function(opts, success, fail) {
    var userIxd = opts.userIxd;
    var alwaysGenKey = opts.alwaysGenKey;
    var data = opts.data;
    exec(success, fail, "Fido", "genDeviceFIDO", [data, userIxd, alwaysGenKey]);
};

Fido.setCustSeqFIDO = function(userIxdEnc, success, fail) {
    exec(success, fail, "Fido", "setCustSeqFIDO", [userIxdEnc]);
};

Fido.setFeatureFIDO = function(opts, success, fail) {
    var userIxd = opts.userIxd;
    var featureType = opts.featureType;
    exec(success, fail, "Fido", "setFeatureFIDO", [featureType, userIxd]);
};

Fido.getLoginSignatureFIDO = function(opts, success, fail) {
    var userIxd = opts.userIxd;
    var featureType = opts.featureType;
    var featureOption = opts.featureOption;
    var data = opts.data;
    exec(success, fail, "Fido", "getLoginSignatureFIDO", [featureType, userIxd, data, featureOption]);
};

Fido.getTrxSignatureFIDO = function(opts, success, fail) {
    var userIxd = opts.userIxd;
    var featureType = opts.featureType;
    var featureOption = opts.featureOption;
    var data = opts.data;
    var txnTime = opts.txnTime;
    
    exec(success, fail, "Fido", "getTrxSignatureFIDO", [featureType, userIxd , data, featureOption, txnTime]);
};

Fido.checkFingerAvailFIDO = function(success, fail) {
    exec(success, fail, "Fido", "checkFingerAvailFIDO", []);
};

Fido.decryptDataFIDO = function(dataEnc, success, fail) {
    exec(success, fail, "Fido", "decryptDataFIDO", [dataEnc]);
};

Fido.checkFeatureAvailFIDO = function(success, fail) {
    exec(success, fail, "Fido", "checkFeatureAvailFIDO", []);
};

Fido.checkFingerPrintHashFIDO = function(success, fail) {
    exec(success, fail, "Fido", "checkFingerPrintHashFIDO", []);
};

Fido.setFeatureParamFIDO = function(featureParam, success, fail) {
    exec(success, fail, "Fido", "setFeatureParamFIDO", [featureParam]);
};

Fido.getOldCustSeqFIDO = function(success, fail) {
    exec(success, fail, "Fido", "getOldCustSeqFIDO", []);
};

module.exports = Fido;




});

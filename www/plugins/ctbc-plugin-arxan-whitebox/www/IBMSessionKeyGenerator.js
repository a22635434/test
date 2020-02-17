cordova.define("ctbc-plugin-arxan-whitebox.IBMSessionKeyGenerator", function(require, exports, module) {
    var exec = require('cordova/exec');

    var IBMSessionKeyGenerator = function() {};

    /**
     * 執行交換key
     * @param data any // not used
     * @param success callback, with argument { encRn: <encrypted rn1 value>, shaRn: <sha256 of rn1>}
     * @param error callback with error message
     */
    //IBMSessionKeyGenerator.doInitialHandshake = function(data, success, error) {
    //    exec(success, error, "IBMSessionKeyGenerator", "doInitialHandshake", []);
    //};
    /* 驗證交換Key */
    IBMSessionKeyGenerator.finishHandshake = function(data, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "finishHandshake", [data.sessionKey, data.sessionIV, data.appKeyRed, data.appKeyGreen, data.sessionKeyHash]);

    };
    /* 使用Session Key加密 */
    IBMSessionKeyGenerator.encrypt = function(data, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "encrypt", [data]);
    };
    /* 使用Session Key解密 */
    IBMSessionKeyGenerator.decrypt = function(data, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "decrypt", [data]);
    };
    //IBMSessionKeyGenerator.encryptWithPublicKey = function(data, success, error) {
    //    exec(success, error, "IBMSessionKeyGenerator", "encryptWithPublicKey", [data]);
    //};

    //IBMSessionKeyGenerator.generateDeviceToken = function(success, error) {
    //    exec(success, error, "IBMSessionKeyGenerator", "generateDeviceToken", []);
    //};

    //IBMSessionKeyGenerator.setSecretKey = function(data, success, error) {
    //    exec(success, error, "IBMSessionKeyGenerator", "setSecretKey", [data.secretKey, data.secretIV]);
    //};

    /* 使用 Secret Key 加密 */
    IBMSessionKeyGenerator.encryptWithSecretKey = function(data, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "encryptWithSecretKey", [data]);
    };
    /* 使用 Secret Key解密 */
    IBMSessionKeyGenerator.decryptWithSecretKey = function(data, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "decryptWithSecretKey", [data]);
    };
    /* 使用 舊的Secret Key解密 */
    IBMSessionKeyGenerator.decryptWithOldSecretKey = function(data, timeStamp, success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "decryptWithOldSecretKey", [data, timeStamp]);
    };
    IBMSessionKeyGenerator.getLatestSecretKeyTimestamp = function(success, error) {
        exec(success, error, "IBMSessionKeyGenerator", "getLatestSecretKeyTimestamp", []);
    };



    module.exports = IBMSessionKeyGenerator;
    /**
     * 提供產生 session key 的單一入口, 載入後會自動換 key
     * 前端如果有需要加密的值，可執行 SessionKey.encrypt( 明文, successCallback, errorCallback);
     * 解密則為 SessionKey.decrypt( 明文, successCallback, errorCallback);
     *
     */
    //window.SessionKey = {
    //	     //Application Constructor
    //	    initialize: function() {
    //	        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    //	    },
    //
    //	    // deviceready Event Handler
    //	    onDeviceReady: function() {
    //	        this.initialHandShake();
    //	    },
    //
    //	    hasSessionKey: false,
    //
    //	    initialHandShake: function() {
    //	    	var handleInitSuccess = function(data) {
    //	    		//send data to server, 取得 part2
    //          // TODO: change to ibutils.sendRequest()
    //	        	$.ajax({
    //	                url: cubApp.device + 'handshake',
    //	                type: 'POST',
    //	                data: data,
    //	        	}).done(handleServerSuccess).fail(handleServerFailed);
    //
    //	    	};
    //	    	var handleInitFail = function(errMsg) {
    //	    		console.log("error init handshake: " + errMsg);
    //	    		// 重整 app?
    //	    	};
    //	    	var handleServerSuccess = function(data, status, jqXHR) {
    //          //TODO: can be removed if using IBUtils.sendRequest
    //          if (jqXHR.getResponseHeader('x-auth-token') !== null) {
    //            SessionKey.xtoken = jqXHR.getResponseHeader('x-auth-token');
    //          }
    //	    		// 取得 server 回應之 part2 並進行驗證
    //	    		IBMSessionKeyGenerator.finishHandshake(data, handleFinalSuccess, handleFinalFailed);
    //	    	};
    //	    	var handleServerFailed = function(errMsg) {
    //	    		console.log("error server handshake: " + errMsg);
    //	    		// 重整 app?
    //	    	};
    //	    	var handleFinalSuccess = function(data) {
    //	    		SessionKey.hasSessionKey = true;
    //          //publish session key handshake success
    //          $(document).trigger('sessionkeyready');
    //	    	};
    //	    	var handleFinalFailed = function(errMsg){
    //	    		console.log("error init handshake: " + errMsg);
    //	    		// 重整 app?
    //	    	};
    //	    	// 呼叫 plugin 產生 session key part1
    //	    	IBMSessionKeyGenerator.doInitialHandshake(null, handleInitSuccess, handleInitFail);
    //	    },
    //
    //	    encrypt: function(plainText, success, fail) {
    //	    	if(!this.hasSessionKey) {
    //	    		console.log('session key not available');
    //	    		fail('session key not available');
    //	    	}
    //	    	IBMSessionKeyGenerator.encrypt(plainText, success, fail);
    //	    },
    //
    //	    decrypt: function(cipherText, success, fail) {
    //	    	if(!this.hasSessionKey) {
    //	    		fail('session key not available');
    //	    	}
    //	    	IBMSessionKeyGenerator.decrypt(cipherText, success, fail);
    //	    },
    //
    //      encryptWithPublicKey: function(plainText, success, fail) {
    //        IBMSessionKeyGenerator.encryptWithPublicKey(plainText, success, fail);
    //      }
    //};
    //
    //SessionKey.initialize();
});
cordova.define("com.egoo.xchatplugin.XChatPlugin", function(require, exports, module) {

    // Notification event
    exports.onMessageFromAgent = function(success, error) {
        cordova.exec(success, error, "XChatPlugin", "onMessageFromAgent", []);
    };

    // SendMessage Package
    exports.onMakeCallViaVidyo = function(wss, fromuser, success, error) {
        cordova.exec(success, error, "XChatPlugin", "onMakeCallViaVidyo", [wss, fromuser]);
    };

    exports.onMakeCallViaSIP = function(wss, fromuser, success, error) {
        cordova.exec(success, error, "XChatPlugin", "onMakeCallViaSIP", [wss, fromuser]);
    };

    exports.onSendMessage = function(wss, fromuser, connid, success, error) {
    	cordova.exec(success, error, "XChatPlugin", "onSendMessage", [wss, fromuser, connid]);
    };

    exports.onCreateVidyoRoom = function(wss, fromuser, success, error) {
    	cordova.exec(success, error, "XChatPlugin", "onCreateVidyoRoom", [wss, fromuser]);
    };

    exports.onDeleteVidyoRoom = function(wss, fromuser, success, error) {
    	cordova.exec(success, error, "XChatPlugin", "onDeleteVidyoRoom", [wss, fromuser]);
    };

    exports.onJoinVidyoRoom = function(wss, fromuser, connid, success, error) {
    	cordova.exec(success, error, "XChatPlugin", "onJoinVidyoRoom", [wss, fromuser, connid]);
    };

    // SDK function mapping
    exports.SendMessage = function(json, success, error) {
        cordova.exec(success, error, "XChatPlugin", "SendMessage", [json]);
    };

    exports.JoinConference = function(json, success, error) {
        cordova.exec(success, error, "XChatPlugin", "JoinConference", [json]);
    };

    exports.LeaveConference = function(json, success, error) {
        cordova.exec(success, error, "XChatPlugin", "LeaveConference", [json]);
    };

    exports.permissonReqest = function(json, success, error) {
        cordova.exec(success, error, "XChatPlugin", "permissonReqest", [json]);
    };
    
});

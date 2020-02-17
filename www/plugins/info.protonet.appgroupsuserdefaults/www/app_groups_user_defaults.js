cordova.define("info.protonet.appgroupsuserdefaults.AppGroupsUserDefaults", function(require, exports, module) {
var AppGroupsUserDefaults = function() {};

AppGroupsUserDefaults.prototype.save = function(options, success, fail) {
  cordova.exec(success ,fail , "AppGroupsUserDefaults", "save", [options]);
};

AppGroupsUserDefaults.prototype.load = function(options, success, fail) {
  cordova.exec(success, fail, "AppGroupsUserDefaults", "load", [options]);
};

AppGroupsUserDefaults.prototype.remove = function(options, success, fail) {
  cordova.exec(success, fail, "AppGroupsUserDefaults", "remove", [options]);
};

AppGroupsUserDefaults.prototype.getSiriIntentData = function(options, success, fail) {
  cordova.exec(success, fail, "AppGroupsUserDefaults", "getSiriIntentData", [options]);
};

var appGroupsUserDefaults = new AppGroupsUserDefaults();
module.exports = appGroupsUserDefaults;

});

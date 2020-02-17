cordova.define("cordova-plugin-speechrecognition.SpeechRecognition", function(require, exports, module) {
module.exports = {
  isRecognitionAvailable: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'isRecognitionAvailable', []);
  },
  startListening: function(successCallback, errorCallback, options) {
    options = options || {};
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'startListening', [ options.language, options.matches, options.prompt, options.showPartial, options.showPopup ]);
  },
  stopListening: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'stopListening', []);
  },
  getSupportedLanguages: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'getSupportedLanguages', []);
  },
  hasPermission: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'hasPermission', []);
  },
  requestPermission: function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'SpeechRecognition', 'requestPermission', []);
  },
  receiveEvent: function(event, eventData){
    if(cordova.speechRecognitionListeners && cordova.speechRecognitionListeners.length > 0){
      for(var i=0;i<cordova.speechRecognitionListeners.length;i++){
        cordova.speechRecognitionListeners[i](event, eventData);
      }
    }
  },
  listenerEvent: function(callback){
    if(!cordova.speechRecognitionListeners){
      cordova.speechRecognitionListeners = [];
    }
    cordova.speechRecognitionListeners.push(callback);
  }
};

});

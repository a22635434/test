var World = {

   outterHtml:"https://www.ctbcbank.com/content/dam/minisite/long/mobile/ar.html",

   init: function initFn() {
       this.createOverlays();
   },
   createOverlays: function createOverlaysFn() {
       //載入辨識圖檔
       this.targetCollectionResource = new AR.TargetCollectionResource("assets/wtcchinaios.mp4", {
           onError: World.onError
       });

       //載入tracker
       this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
           onTargetsLoaded: World.showInfoBar,
           onError: World.onError
       });
    

       var lvideo = new AR.VideoDrawable("assets/lchina.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError
       });


       //載入影片
       var video = new AR.VideoDrawable("assets/schina.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError,
           onPlaybackStarted: function videoPlaying() {
              
           },
           onFinishedPlaying: function videoFinished() {
               this.stop ();
               this.enabled = false;
               lvideo.enabled = true;
               lvideo.play(-1);


           }
       });
       var lrosevideo = new AR.VideoDrawable("assets/lrose.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError
       });

       var rosevideo = new AR.VideoDrawable("assets/srose.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           onPlaybackStarted: function videoPlaying() {
              
           },
           onFinishedPlaying: function videoFinished() {
               this.stop ();
               this.enabled = false;
               lrosevideo.enabled = true;
               lrosevideo.play(-1);

           },
           isTransparent: true,
           onError: World.onError
       });
       var lbananavideo = new AR.VideoDrawable("assets/lbanana.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError
       });
       
       var bananavideo = new AR.VideoDrawable("assets/sbanana.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError,
           onLoaded: function videoLoaded() {
           },
           onPlaybackStarted: function videoPlaying() {
              
           },
           onFinishedPlaying: function videoFinished() {
               this.stop ();
               this.enabled = false;
               lbananavideo.enabled = true;
               lbananavideo.play(-1);

           }
       });
       var lchocovideo = new AR.VideoDrawable("assets/lchoco.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           isTransparent: true,
           onError: World.onError
       });

       
       var chocovideo = new AR.VideoDrawable("assets/schoco.mp4", 2, {
           translate: {
               x: 0,
               y:0
           },
           onFinishedPlaying: function videoFinished() {
               this.stop ();
               this.enabled = false;
               lchocovideo.enabled = true;
               lchocovideo.play(-1);

           },
           isTransparent: true,
           onError: World.onError
       });

       //HTML 檔案
       var weatherWidget = new AR.HtmlDrawable({
        uri:World.outterHtml
    }, 2.5, {
        viewportWidth: 400,
        viewportHeight: 300,
        translate: {
            x: 1.5,
            y: 1.4
        }, zOrder: 1,
        horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
        verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
        clickThroughEnabled: true,
        allowDocumentLocationChanges: false,
        onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
            AR.platform.sendJSONObject( { action: uri });
        },
        onError: World.onError
    });


       
       this.pageOne = new AR.ImageTrackable(this.tracker, "china", {
           drawables: {
               cam: [video,lvideo, weatherWidget]
           },
           onImageRecognized: function onImageRecognizedFn() {
               World.pageOne.snapToScreen.enabled = true;
               video.enabled = true;
               video.resume();
               World.onFindCard();
               document.getElementById("tipcontainerios").style.display = "none";

           },
           snapToScreen: {
               snapContainer: document.getElementById('snapContainer')
           },
           onImageLost: function onImageLostFn() {
               World.pageOne.snapToScreen.enabled = false;
               video.stop();
               lvideo.stop();
               lvideo.enabled = false;
               document.getElementById("tipcontainerios").style.display = "block";

           },
           onError: World.onError
       });
       this.opageOne = new AR.ImageTrackable(this.tracker, "ochina", {
        drawables: {
            cam: [video,lvideo, weatherWidget]
        },
        onImageRecognized: function onImageRecognizedFn() {
            World.opageOne.snapToScreen.enabled = true;
            video.enabled = true;
            video.resume();
            World.onFindCard();
            document.getElementById("tipcontainerios").style.display = "none";

        },
        snapToScreen: {
            snapContainer: document.getElementById('snapContainer')
        },
        onImageLost: function onImageLostFn() {
            World.opageOne.snapToScreen.enabled = false;
            video.stop();
            lvideo.stop();
            lvideo.enabled = false;
            document.getElementById("tipcontainerios").style.display = "block";

        },
        onError: World.onError
    });
       this.rose = new AR.ImageTrackable(this.tracker, "rose", {
           drawables: {
               cam: [rosevideo,lrosevideo, weatherWidget]
           },
           onImageRecognized: function onImageRecognizedFn() {
               World.rose.snapToScreen.enabled = true;
               rosevideo.enabled = true;
               rosevideo.resume();
               World.onFindCard();
               document.getElementById("tipcontainerios").style.display = "none";

           },
           snapToScreen: {
               snapContainer: document.getElementById('snapContainer')
           },
           onImageLost: function onImageLostFn() {
               World.rose.snapToScreen.enabled = false;
               rosevideo.stop();
               lrosevideo.stop();
               lrosevideo.enabled = false;
               document.getElementById("tipcontainerios").style.display = "block";


           },
           onError: World.onError
       });

       this.orose = new AR.ImageTrackable(this.tracker, "orose", {
        drawables: {
            cam: [rosevideo,lrosevideo, weatherWidget]
        },
        onImageRecognized: function onImageRecognizedFn() {
            World.orose.snapToScreen.enabled = true;
            rosevideo.enabled = true;
            rosevideo.resume();
            World.onFindCard();
            document.getElementById("tipcontainerios").style.display = "none";

        },
        snapToScreen: {
            snapContainer: document.getElementById('snapContainer')
        },
        onImageLost: function onImageLostFn() {
            World.orose.snapToScreen.enabled = false;
            rosevideo.stop();
            lrosevideo.stop();
            lrosevideo.enabled = false;
            document.getElementById("tipcontainerios").style.display = "block";


        },
        onError: World.onError
    });

       this.choco = new AR.ImageTrackable(this.tracker, "choco", {
           drawables: {
               cam: [chocovideo,lchocovideo, weatherWidget]
           },
           onImageRecognized: function onImageRecognizedFn() {
               World.choco.snapToScreen.enabled = true;
               chocovideo.enabled = true;
               chocovideo.resume();
               World.onFindCard();
               document.getElementById("tipcontainerios").style.display = "none";

           },
           snapToScreen: {
               snapContainer: document.getElementById('snapContainer')
           },
           onImageLost: function onImageLostFn() {
               World.choco.snapToScreen.enabled = false;
               chocovideo.stop();
               lchocovideo.enabled = false;
               lchocovideo.stop();
               document.getElementById("tipcontainerios").style.display = "block";

           },
           onError: World.onError
       });
       this.ochoco = new AR.ImageTrackable(this.tracker, "ochoco", {
        drawables: {
            cam: [chocovideo,lchocovideo, weatherWidget]
        },
        onImageRecognized: function onImageRecognizedFn() {
            World.ochoco.snapToScreen.enabled = true;
            chocovideo.enabled = true;
            chocovideo.resume();
            World.onFindCard();
            document.getElementById("tipcontainerios").style.display = "none";

        },
        snapToScreen: {
            snapContainer: document.getElementById('snapContainer')
        },
        onImageLost: function onImageLostFn() {
            World.ochoco.snapToScreen.enabled = false;
            chocovideo.stop();
            lchocovideo.enabled = false;
            lchocovideo.stop();
            document.getElementById("tipcontainerios").style.display = "block";

        },
        onError: World.onError
    });


       this.banana = new AR.ImageTrackable(this.tracker, "banana", {
           drawables: {
               cam: [bananavideo,lbananavideo, weatherWidget]
           },
           onImageRecognized: function onImageRecognizedFn() {
               World.banana.snapToScreen.enabled = true;
               bananavideo.enabled = true;
               bananavideo.resume();
               World.onFindCard();
               document.getElementById("tipcontainerios").style.display = "none";
           },
           snapToScreen: {
               snapContainer: document.getElementById('snapContainer')
           },
           onImageLost: function onImageLostFn() {
               World.banana.snapToScreen.enabled = false;
               bananavideo.stop();
               lbananavideo.enabled = false;
               lbananavideo.stop();
               document.getElementById("tipcontainerios").style.display = "block";
           },
           onError: World.onError
       });

       document.getElementById("info-text").style.display = "block";

   },
   finish: function finishFn() {
       AR.platform.sendJSONObject( { action: 'close_ar' });
   },
   redirect: function finishFn() {
       AR.platform.sendJSONObject( { action: 'redirect' });
   },
   onError: function onErrorFn(error) {
       //讀取錯誤
   },
   onFindCard: function onFindCardFn(error) {
       //讀取到卡片 
       //TODO: OCR
         document.getElementById("info-text").style.display = "none";

   },

   showInfoBar: function worldLoadedFn() {
      //載入中
   },

};

World.init();

var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element
  //componentUrl: './pages/index.html',

  id: 'io.framework7.sliceofcake', // App bundle ID
  name: 'Slice of cake', // App name
  theme: 'auto', // Automatic theme detection

  // App root data
  data: function () {
    return {
      data: 123
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,

  // Register service worker
  serviceWorker: Framework7.device.cordova ? {} : {
    path: './service-worker.js',
  },
  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
app.views.create('.view-main', {
  url: '/',
  routes: routes
})

require.config({
  paths: {
      'angular' : 'lib/angular',
  },
  shim: {
      ngResource: {
          deps: ['angular'],
          exports: 'angular'
      }
  },
  baseUrl: ''
});

//require(['dev'], function (app) {
//  app.init();
//});

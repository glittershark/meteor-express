var express = Npm.require('express');
Express = function() {
  var app = express();
  WebApp.connectHandlers.use(Meteor.bindEnvironment(app));
  return app;
};

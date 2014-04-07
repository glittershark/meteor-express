var express = Npm.require('express');
app = express();
app.start = function() {
  WebApp.connectHandlers.use(express);
};


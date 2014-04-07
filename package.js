Package.describe({
  summary: "The Express web framework packaged for Meteor"
});

Package.on_use(function(api, where) {
  api.use('routepolicy', 'server');
  api.use('webapp', 'server');
  api.add_files('express-meteor.js', 'server');
  api.export('app', 'server');
});

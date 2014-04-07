Meteor Express
==============
The [Express](http://expressjs.com) web framework packaged for [Meteor](http://www.meteor.com)

Installation
------------
```
mrt add meteor-express
npm install --save express
```

Usage
-----

```javascript
if (Meteor.isServer) {
  app = Express();
  app.get('/hello/world', function(req, res) {
    res.send(200, "Hello, World!");
  });
}
```

Refer to the Express documentation for advanced usage.



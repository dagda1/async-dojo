var express       = require('express'),
  app             = express(),
  fileSystem      = require('fs'),
  server          = require('http').createServer(app),
  faker = require('Faker'),
  fs = require('fs');

app.configure('development', function(){
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + "/app"));
  app.use(express.static(__dirname + "/bower_components"));
  app.use(function(req, res, next) {
    req.faker = faker;

    return next();
  });

  app.use(app.router);

  app.use(function(err, req, res, next) {
    res.status(500);
    res.json({ error: err });
  });
});

app.all('*', function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-File-Type, X-File-Name, X-File-Size');
  response.header('Access-Control-Allow-Methods', 'POST');
  next();
});

// create GET routes
fs.readdirSync(__dirname + '/app/controllers').forEach(function(name){
  var obj = require('./app/controllers/' + name),
      name = obj.name || name,
      path;

  app.get("/" + name, obj.index);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  return console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

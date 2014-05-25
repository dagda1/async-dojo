exports.index = function(req, res) {
  var i = 0,
      l = 100,
      users = [];

  for(i; i < l; i++){
    users.push({
      name: req.faker.Name.findName(),
      email: req.faker.Internet.email()
    });
  }

  res.json(users);
};

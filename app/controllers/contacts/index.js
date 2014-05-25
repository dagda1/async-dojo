exports.index = function(req, res) {
  var i = 0,
      l = 100,
      contacts = [];

  for(i; i < l; i++){
    contacts.push({
      firstName: req.faker.Name.firstName(),
      lastName: req.faker.Name.lastName(),
      email: req.faker.Internet.email()
    });
  }

  res.json(contacts);
};

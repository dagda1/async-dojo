exports.index = function(req, res) {
  var i = 0,
      l = 100,
      companies = [];

  for(i; i < l; i++){
    companies.push({
      companyName: req.faker.Company.companyName(),
      email: req.faker.Internet.email()
    });
  }

  res.json(companies);
};

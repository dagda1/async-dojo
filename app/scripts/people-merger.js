var PeopleMerger = function(bulk) {
  this.bulk = bulk;
};

PeopleMerger.prototype.merge = function() {
  var ret = [];

  ret.push.apply(ret, this.bulk.users.map(function(user){
    return {name: user.name, email: user.email};
  }));

  ret.push.apply(ret, this.bulk.contacts.map(function(contact){
    return {
      name: contact.firstName + " " + contact.lastName,
      email: contact.email
    };
  }));

  ret.push.apply(ret, this.bulk.companies.map(function(company){
    return {name: company.companyName, email: company.email};
  }));

  return ret;
};

export default PeopleMerger;

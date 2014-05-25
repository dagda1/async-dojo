import getJSON from "read";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function(callback){
  var self = this;

  return new RSVP.Promise(function(resolve, reject) {
    return getJSON('/login').then(function(token) {

      return RSVP.hash({
        users: getJSON('/users'),
        contacts: getJSON('/contacts'),
        companies: getJSON('/companies')
      }).then(function(hash) {
        self.users = hash.users;
        self.companies = hash.companies;
        self.contacts = hash.contacts;

        return resolve(self);
      });
    }).catch(reject);
  });
};

export default BulkLoader;

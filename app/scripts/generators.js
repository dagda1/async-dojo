import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function() {
  var self = this;

  return async(function * () {
    try {
      let token = yield getJSON('/login');
      self.users = yield getJSON('/users');
      self.contacts = yield getJSON('/contacts');
      self.companies = yield getJSON('/companies');

      return self;
    } catch (err) {
      throw err;
    }
  });
};

export default BulkLoader;

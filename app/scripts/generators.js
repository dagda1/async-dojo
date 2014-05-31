import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
}

BulkLoader.prototype.load = function(password) {
  // try {
  //   var token = getJSON('/login');
  //   this.users = getJSON('/users');
  //   this.contacts = getJSON('/contacts');
  //   this.companies = getJSON('/companies');

  //   return this;
  // } catch (err) {
  //   throw err;
  // }
};

export default BulkLoader;

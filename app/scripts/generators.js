import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
}

BulkLoader.prototype.load = function(password) {
  var self = this;

};

export default BulkLoader;

import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
}

// BulkLoader.prototype.iterator = ????

export default BulkLoader;

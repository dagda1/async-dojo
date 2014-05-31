function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function(callback){
  var self = this;

  $.getJSON('/login').done(function(data) {

  });
};

export default BulkLoader;

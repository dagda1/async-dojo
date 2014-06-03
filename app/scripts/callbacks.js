import getJSON from "read";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
}

BulkLoader.prototype.load = function(password, callback, errBk){
  var self = this;

  $.getJSON('/auth/' + password).done(function(data) {
    $.getJSON('/users').done(function(data) {
      self.users = data;
      $.getJSON('/companies').done(function(data) {
        self.companies = data;
        $.getJSON('/contacts').done(function(data) {
          self.contacts = data;
          callback(self);
        }).fail(errBk);
      }).fail(errBk);
    }).fail(errBk);
  }).fail(errBk);
};

export default BulkLoader;

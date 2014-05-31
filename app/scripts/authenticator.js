import getJSON from "read";

function Authenticator() {}

Authenticator.prototype.login = function(password, cbk, errBk) {
  getJSON("/auth/" + password)
    .done(function(data) {
      return cbk("Welcome back captain!");
    })
    .fail(errBk);
};

export default Authenticator;

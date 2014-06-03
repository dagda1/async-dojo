import getJSON from "read";

function Authenticator() {}

Authenticator.prototype.login = function(password) {
  return new RSVP.Promise(function(resolve, reject) {
  getJSON("/auth/" + password)
        .then(resolve)
        .catch(reject);
  });
};

export default Authenticator;

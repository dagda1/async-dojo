import getJSON from "read";

function LoginController() {}

LoginController.prototype.login = function(cbk, errBk) {
  getJSON("/login")
    .done(function(data) {
      return cbk("You have successfully logged in!");
    })
    .fail(errBk);
};

export default LoginController;

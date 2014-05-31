export default function getJSON(url, options) {
  var client = new XMLHttpRequest();
  client.open("GET", url);
  client.onreadystatechange = handler;
  client.responseType = "json";
  client.setRequestHeader("Accept", "application/json");
  client.send();

  function Result() {}

  Result.prototype.success = function(){ return this; };
  Result.prototype.error = function(){ return this; };

  Result.prototype.done = function(callBack) {
    this.success = callBack;
    return this;
  };

  Result.prototype.fail = function(callBack) {
    this.error = callBack;
    return this;
  };

  var result = new Result();

  function handler() {
    if (this.readyState === this.DONE) {
      if (this.status === 200) { result.success(this.response); }
      else { result.error(this); }
    }
  }

  return result;
}

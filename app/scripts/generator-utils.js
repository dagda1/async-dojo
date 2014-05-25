export default function async(generatorFunc) {
  function continuer(verb, arg) {
    var result;
    try {
      result = generator[verb](arg);
    } catch (err) {
      return RSVP.Promise.reject(err);
    }
    if (result.done) {
      return result.value;
    } else {
      return RSVP.Promise.resolve(result.value).then(callback, errback);
    }
  }

  var generator = generatorFunc();
  var callback = continuer.bind(continuer, "next");
  var errback = continuer.bind(continuer, "throw");

  return callback();
}

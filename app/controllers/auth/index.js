exports.index = function(req, res) {
  if(req.params.password !== "007") {
    return res.send(500, { error: 'INTRUDER ALERT!' });
  }

  res.json({token: 'xxx-secret--pass'});
};

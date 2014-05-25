function nameFor(path) {
  var result,  match;
  if (match = path.match(/^(?:scripts|test|test\/tests)\/(.*?)(?:\.js)?$/)) {
    result = match[1];
  } else {
    result = path;
  }

  return path.substr(1);
}


module.exports = {
  amd: {
    type: 'amd',
    moduleName: nameFor,
    files: [{
      expand: true,
      cwd: 'app/scripts',
      src: [ '**/*.js', ],
      dest: 'tmp/',
      ext: '.amd.js'
    }]
  }
};

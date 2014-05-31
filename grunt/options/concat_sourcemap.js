module.exports = {
  app: {
    src: [
      "bower_components/jquery/dist/jquery.js",
      "bower_components/rsvp/rsvp.js",
      "vendor/loader.js",
      "tmp/transpiled**/*.js"],
    dest: "tmp/result/assets/app.js",
    options: {
      sourcesContent: true
    }
  },
  main: {
    src: [
      "app/main.js"],
    dest: "app/main.js",
    options: {
      sourcesContent: true
    }
  }
};

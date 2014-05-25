module.exports = {
  dist: {
    src: ["bower_components/jquery/dist/jquery.js",
          "bower_components/rsvp/rsvp.js",
          "vendor/loader.js",
          "dist/async.amd.js"],
    dest: "app/main.js",
    options: {
      barename: "async",
      namespace: "async"
    }
  }
};

var matchdep = require('matchdep');

module.exports = function (grunt) { 
  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.loadTasks('grunt');

  require('load-grunt-config')(grunt, {
    configPath: __dirname + '/grunt/options',
    init: true
  });

  grunt.loadNpmTasks("grunt-es6-module-transpiler");
  grunt.task.registerTask('test', ['build', 'jshint', 'concat:test', 'karma']);
  grunt.task.registerTask('build', ['neuter:build']);
  grunt.task.registerTask('default', ['start']);
  grunt.task.registerTask("expo", ["transpile", "concat:amd", "browser:dist"]);
  grunt.task.registerTask("preview", ["watch"]);
  grunt.task.registerTask('start', ['expo', 'express:dev']);
};

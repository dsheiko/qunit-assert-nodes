/*jshint node:true */
module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-git-authors");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ["*.js", "test/**/*.js"]
    },
    qunit: {
      // For CI and Docker compat
      options: { puppeteer: { args: [ "--no-sandbox" ] } },
      all: ["test/index.html"]
    }
  });

  grunt.registerTask("test", ["jshint", "qunit"]);

};

module.exports = function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      execute: {
          target: {
              src: ['mvn_install.js']
          }
      }
    });
  grunt.loadNpmTasks('grunt-execute');
  grunt.registerTask('default', ['execute']);
}
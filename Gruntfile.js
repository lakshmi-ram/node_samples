module.exports = function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      execute: {
          build: {
              src: ['build.js']
          }
      },execute: {
          buildAndDeploy: {
              src: ['buildAndDeploy.js']
          }
      }
    });
  grunt.loadNpmTasks('grunt-execute');
  grunt.registerTask('default', ['execute:build']);

  var target = grunt.option('target') || 'libs';
  grunt.registerTask('buildAndDeploy', ['execute:build:'+target]);
  grunt.registerTask('build', ['execute:build:'+target]);
  grunt.registerTask('basicSetUp', ['execute:build','execute:buildAndDeploy']);
}
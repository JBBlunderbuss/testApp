module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }

    });
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['test']);

};
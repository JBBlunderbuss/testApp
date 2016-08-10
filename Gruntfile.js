module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/styles/main.css': 'app/styles/main.scss'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-sass');


    grunt.registerTask('test', ['karma']);
    grunt.registerTask('default', ['test', 'sass']);

};
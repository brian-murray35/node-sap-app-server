'use strict';
var pkg = require('../package.json');
var config = {
    clean: [ '.sonar', 'coverage' ],
    mocha: [ 'test/**/*.spec.js'],
    src: ['lib/**/*.js', 'index.js', 'bin/worker.js'],
    sonar: {
        host: { url: 'http://build-sonar.mo.sap.corp:8080/sonar' },
        jdbc: {
            url: 'jdbc:mysql://build-sonar.mo.sap.corp:3306/sonar?useUnicode=true&amp;characterEncoding=utf8',
            username: 'sonar',
            password: 'sonar'
        },
        projectKey: 'sonar:' + pkg.name,
        projectName: pkg.name,
        projectVersion: pkg.version,
        sources: 'index.js, lib/, bin/',     // comma-delimited string of source directories
        language: 'js',
        sourceEncoding: 'UTF-8',
        javascript: {
            lcov: {
                reportPath: 'coverage/lcov.info'
            }
        }
    }
};

config.eslint = config.src.concat([ 'test/**/*.js', 'gulp-config/*.js', 'make', 'gulpfile.js' ]);

module.exports = config;

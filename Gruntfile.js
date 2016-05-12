


module.exports = function(grunt) {
  var browsers = [{
    browserName: 'firefox',
    version: '4',
    platform: 'Windows 10'
  },{
    browserName: 'firefox',
    version: '4',
    platform: 'Windows 8.1'
  },{
    browserName: 'firefox',
    version: '4',
    platform: 'XP'
  },{
    browserName: 'firefox',
    version: '4',
    platform: 'Windows 2008'
  },{
    browserName: 'firefox',
    version: '4',
    platform: 'WIN8'
  },{
    browserName: 'firefox',
    version: '40',
    platform: 'linux'
  },{
    browserName: 'firefox',
    version: '4',
    platform: 'OS X 10.8'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'Windows 10'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'Windows 8.1'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'XP'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'Windows 2008'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'WIN8'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'linux'
  },{
    browserName: 'googlechrome',
    version: '27',
    platform: 'OS X 10.8'
  },{
    browserName: 'internet explorer',
    version: '10',
    platform: 'Windows 2008'
  },{
    browserName: 'internet explorer',
    version: '10',
    platform: 'WIN8'
  },{
    browserName: 'safari',
    version: '6.0',
    platform: 'OS X 10.8'
  }];
grunt.initConfig({
connect: {
server: {
options: {
base: "",
port: 9999
}
}
},
'saucelabs-mocha': {
all: {
options: {
urls: ["http://127.0.0.1:9999/test/index.html"],
tunnelTimeout: 2,
build: process.env.TRAVIS_JOB_ID,
concurrency: 3,
browsers: browsers,
testname: "mocha tests",
tags: ["master"]
}
}
},
watch: {}
});

// Loading dependencies
for (var key in grunt.file.readJSON("package.json").devDependencies) {
if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
}

grunt.registerTask("dev", ["connect", "watch"]);
grunt.registerTask("test", ["connect", "saucelabs-mocha"]);
};
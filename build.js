var maven = require('maven');
const readYml = require('js-yaml');
const fs = require('fs');
var config = [];

try {
    config = readYml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
} catch (e) {
    console.log(e);
}

var codeln = config.workspaceLocation + process.argv[2];
console.log('fileName: ', codeln);

maven.create({
    cwd: codeln
}).execute(['clean', 'install'], { 'skipTests': true }).then(function (err) {
    if(err) console.log(err);
}).catch(console.error);
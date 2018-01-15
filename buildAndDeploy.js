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
console.log('code location: ', codeln);

maven.create({
    cwd: codeln
}).execute(['clean', 'install'], { 'skipTests': true }).then(function () {

    var jarln = codeln+"/target";
    var jarname;
    console.log('jar location: ', jarln);

    var files = fs.readdirSync(jarln).forEach(function(file){
        if(file.endsWith('.jar')){
            jarname = file;
            console.log('jarname: ', jarname);
        }
    });

    const spawn = require('child_process').spawn;
    const proc = spawn('java', ['-jar', jarname], {'cwd': jarln});
    proc.on('exit', function (code, signal) {
        console.log(code, signal);
    });
    proc.stdout.on('data', process.stdout.write.bind(process.stdout));
    proc.stderr.on('data', process.stderr.write.bind(process.stderr));
}).catch(console.error);
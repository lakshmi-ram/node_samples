const readYml = require('js-yaml');
const fs = require('fs');

    try {
        const config = readYml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
        const indentedJson = JSON.stringify(config, null, 4);
        console.log(indentedJson);
        return config;
    } catch (e) {
        console.log(e);
    }

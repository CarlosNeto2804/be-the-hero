'use strict';
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
class Loader {
    load_files(router) {
        const baseDir = __dirname + '/routes';
        fs.readdirSync(path.join(baseDir))
            .filter(this.filter_condition)
            .forEach(this.start(router));
    }
    filter_condition(file) {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js' && file != 'index.js'
    }
    start(router) {
        return (file) => {
            const baseDir = __dirname + '/routes';
            const route = require(path.join(baseDir, file));
            route(router);
        }
    }
}

module.exports = new Loader();

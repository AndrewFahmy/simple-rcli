const fs = require('fs');


module.exports = {
    getCurrentDirectoryBase: () => process.cwd(),

    pathExists: (path) => fs.existsSync(path),

    createDirectory: (path) => fs.mkdirSync(path),

    deleteDirectory: (path) => fs.rmdirSync(path, { recursive: true }),

    getJsonContents: (path) => require(path),

    updateJsonFile: (path, data) => fs.writeFileSync(path, JSON.stringify(data, null, 4))
};
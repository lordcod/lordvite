const path = require('path');
const nextPath = path.join(__dirname, 'node_modules', '.bin', 'vite');
process.argv.length = 0;
process.argv.push(nextPath);
process.env.NODE_ENV = 'production';

require(nextPath);
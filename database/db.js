const Pool = require("pg").Pool;
const crypto = require('crypto');
require('dotenv').config();

const pool = new Pool({
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    host: process.env.HOST_DATABASE,
    port: process.env.PORT_DATABASE,
    database: process.env.USER_DATABASE,
});

var salt = crypto.randomBytes(16);
pool.query(
    "INSERT INTO users (username, hashed_password, salt) VALUES ($1, $2, $3) ON CONFLICT (username) DO NOTHING",
    ["sptrodon", crypto.pbkdf2Sync('khoingu', salt, 310000, 32, 'sha256'), salt]
);

module.exports = pool;

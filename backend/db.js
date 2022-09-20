const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"9555",
    host:"localhost",
    port:5432,
    database:"todo"
});

module.exports = pool;

const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "pgadmin4",
    host: "coins.cqsjdcazj1ea.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "coin"
});

module.exports = pool;
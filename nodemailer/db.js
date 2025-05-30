const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "mariadb8.iq.pl", // ✅ your SQL server host
  user: "itpremium_next", // ✅ your SQL username
  password: "xxxxxx", // ✅ your SQL password
  database: "itpremium_next", // ✅ your SQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

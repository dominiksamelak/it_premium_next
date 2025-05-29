const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "your-sql-host.com",   // ✅ your SQL server host
  user: "youruser",            // ✅ your SQL username
  password: "yourpassword",    // ✅ your SQL password
  database: "yourdatabase",    // ✅ your SQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
const mysql = require('mysql');

const db = mysql.createConnection({
host: "127.0.0.1",
user: "jose",
password: "mesopotamia45",
database:"android" 
})
module.exports = db;
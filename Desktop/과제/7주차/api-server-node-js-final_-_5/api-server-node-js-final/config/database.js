const mysql = require("mysql2/promise");
const { logger } = require("./winston");

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: "database1.cmqoarohgmzg.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    port: "3306",
    password: "11111111",
});

pool.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysql connected...");
});

module.exports = {
    pool: pool,
};

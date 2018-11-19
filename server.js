//创建数据库连接
const mysql = require('mysql')

function conn_fn(){
  let conn = mysql.createConnection({
    host: "47.99.240.192",  //ip
    user: "root", //数据库名
    password: "likai360",  //数据库密码
    database: "test" //数据库名字
  });
  return conn;
}



module.exports = {
  conn_fn : conn_fn
}
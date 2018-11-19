const { app, conn_fn } = require("../../app");
// 获取所有的数据
app.get("/api/program", (req, res) => {
  // 定义SQL语句
  let conn = conn_fn();
  const sqlStr = "SELECT * FROM program";
  conn.query(sqlStr, (err, results) => {
    if (err)
      return res.json({
        code: 1,
        data: null,
        msg: "获取失败"
      });
    res.json({
      code: 0,
      data: results,
      msg: "成功"
    });
  });

  conn.end(function(err){
    // Do something after the connection is gracefully terminated.
    conn.destroy();
    });
});

const express = require("express");
const { conn_fn } = require("./server");
const app = express();

const router = [{url:"/api/getheros",title:'用户列表'}, {url:"/api/program",title:'爬取数据'}];

let html_ = '';

router.forEach(element => {
    html_+= `
    <a href='${element.url}'>${element.title}</a><br>
    `
});

app.listen(8088, () => {
  // 打印一下

  app.get("/", (req, res) =>
    res.send(html_)
  );

  console.log("http://127.0.0.1:8088");
});

module.exports = {
  app,
  conn_fn
};

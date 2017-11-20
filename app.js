var express = require('express')
var app = express()

app.get("/",function(req,resp){
  const welcomePhrase="Hello, World from Express and EJS!"
  const category1="For Slow Jams"
  const cta="Buy some $100 headphones today"
  const categories=["Making Your Music More Hype","Turning Weak Beats to Strong Beats"]
  const viewData={
    "cta":cta,
    "welcomePhrase":welcomePhrase,
    "category1":category1,
  }
  resp.render("index",viewData)
})

module.exports = app

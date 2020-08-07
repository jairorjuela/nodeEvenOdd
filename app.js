const express = require("express")
const app = express()

app.set("view engine", "pug")
app.set("views", "views")

app.get("/", (req, res) => {
  const nums = [...Array(51).keys()]
  const nums1 = nums.splice(0, 1)

  res.render("index", { nums } )
})

app.listen(3000, () => { console.log("start in port 3000") })

const express = require("express")
const cors = require("cors")
const routerUsers = require("./router/Users")
const routerExpenses = require("./router/Expenses")
const routerIncome = require("./router/Income")

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use("/Users", routerUsers)
app.use("/Expenses", routerExpenses)
app.use("/Income", routerIncome)

app.listen(4000, "0.0.0.0", () => {
  console.log("Server started at port 4000")
})

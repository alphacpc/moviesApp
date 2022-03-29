const express = require("express");
const cors = require("cors");
const elasticRoute = require("./routers/index")
const app = express();
const port = 4040;

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/apis/elastic", elasticRoute);


app.listen(port, () => {
  console.log(`Server listenning on ${port}`)
})
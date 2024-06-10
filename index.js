const express = require("express");
const app = express();
const port =  5000||process.env.PORT ;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());
const newRouter = require("./routers/NewsRoutes");

const middlewareFunction = require("./middleware/errors");
const cors = require('cors');


// تكوين middleware CORS
app.use(cors({
  origin: '*'
}));


app.use("/api", newRouter);

app.use(middlewareFunction);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

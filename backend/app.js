const express = require("express");
const app = express();
const cors = require("cors");
const  bookRoute = require("./routes/bookRoutes");
require("./connection/conn");
app.use(cors());
app.use(express.json());

app.use("/api/v1", bookRoute);


app.listen(1000,() =>{
    console.log("Server started succesfully on port 1000")
});
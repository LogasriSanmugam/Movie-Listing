require("dotenv").config();
const movieRoutes = require("./routes/movies/moviesRoutes");
const express = require("express");//import express
const db = require('./db/index');

const app = new express();//create obj,instance for express server in var app
const port = process.env.PORT || 8080;//to communicate with process

app.use(express.json());
app.use("/movies", movieRoutes);
 
db();

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
}); 


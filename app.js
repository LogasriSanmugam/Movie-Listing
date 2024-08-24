require("dotenv").config();
const movieRoutes = require("./routes/movies/moviesRoutes");
const ticketsRoutes = require("./route/tickets/ticketRoutes");
const express = require("express");//import express

const app = express();//create obj,instance for express server in var app
const port = process.env.PORT || 8080;//to communicate with process

app.use("/", movieRoutes);
app.use("/", ticketsRoutes);
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
}); 


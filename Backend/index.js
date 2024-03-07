// Importing necessary modules and packages
const express = require("express");
const app = express();


const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
const databaseConnect=require('./config/database')
databaseConnect();
 
// Middlewares
app.use(express.json());


// Testing the server
app.get("/", (req, res) => {
	return res.send(`<h1>all done</h1>`)
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

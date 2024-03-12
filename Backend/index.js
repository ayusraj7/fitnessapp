// Importing necessary modules and packages
const express = require("express");
const app = express();


const dotenv = require("dotenv");
dotenv.config();

const cors=require('cors');
app.use(cors());


// Loading environment variables from .env file

// Setting up port number
const PORT =4000;

console.log('PORT',PORT)


// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// Connecting to database
const databaseConnect=require('./config/database')
databaseConnect();
 
// Middlewares
app.use(express.json());


// Testing the server
app.get("/", (req, res) => {
	return res.send(`<h1>all done</h1>`)
});



//routes
const authRoutes=require('./routes/Auth');
app.use('/api/v1',authRoutes);
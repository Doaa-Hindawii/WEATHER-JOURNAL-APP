// Setup empty JS object to act as endpoint for all routes
projectData = {};

// projectData.last shows the numer of entries. One entry consists of weather data + mood
projectData.last = -1;

// Require Express to run server and routes
const express = require('express');

// Dependencies
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

//index page
app.get("/", (req, res) => {
    res.send("index");
  });
  
  //post data from api (current weather data)
  app.post("/", (req, res) => {
    let data = req.body;
    projectData.current_weather = data.value;
    projectData.feelings = data.user_feelings;
  });
  
  //post data from api (for the 3 hour forcast)
  app.post("/future_weather", (req, res) => {
    let data = req.body;
    projectData.future_weather = data;
  });
  
  //send data from the stored api data.
  app.get("/weather", (req, res) => {
    res.send([projectData]);
  });

  // Callback to debug
function listening() {
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
};
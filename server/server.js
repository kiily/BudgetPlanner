const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');

//create the app
const app = express();

//API file for interaction with MongoDB
var api = require('./routes/api.js')

// Parsers - parses requests and makes them accessible with req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//MongoDB connection with Mongoose
mongoose.connect('mongodb://localhost/BudgetPlannerDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/*Angular DIST output folder - this is the frontend build
express.static is a built in middleware function to serve static files.
 Pointing the express server to the dist folder as the place to look for the static files */
 app.use('/', express.static(path.join(__dirname, '../dist')));
 app.use('/', api);

 //Send all other http requests to the Angular App
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
 });

 //Middleware for CORS
 app.use(cors());

 //Set port
 const port = process.env.PORT || '8000';
 app.set('port', port);
 
 const server = http.createServer(app);
 
 server.listen(port, () => console.log(`Running on localhost:${port}`));
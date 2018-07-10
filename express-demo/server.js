const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/note_routes')
const notesdb=require("./app/db/firebase")("notes")
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
routes(app, notesdb);
 
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
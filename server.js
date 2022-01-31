// Gets the dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// Sets the port to 3001
const PORT = process.env.PORT || 3001
// Sets the "app" as express 
const app = express();

// Middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(apiRoutes);
app.use('/', htmlRoutes);



// Sets the port up
app.listen(PORT, () => 
    console.log(`Server is now on ${PORT}`)
);
/**
 * TO GOD BE ALL THE GLORY
 * 05-APR-2024
 * This will be the application entry file
 */

// Require the express web application framework to enable us to serve the application
const express = require('express')
// Require colors to enable us to log to the console in different colors
require('colors')
// Require dotenv which loads environment variables from the .env file into process.env
require('dotenv').config()
// This is the port that we want our server to run on. 
const port = process.env.APP_PORT || 5000
// Create an Express application
const app = express()
// Return a middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Return a middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: false }))
// Specify the port where the application shall listen for connections
app.listen(port, () => console.log('Server started successfully on port '.bgBlue + port.bgYellow))

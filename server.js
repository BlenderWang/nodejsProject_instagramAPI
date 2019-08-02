// Grab the packages/variables
const express = require('express')
const app = express()
const ig = require('instagram-node').instagram()

// Configure the app
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'))

// set the view engine to ejs
app.set('view engine', 'ejs')

// Configure instagram with the access token
ig.use({
    // access token goes here
    access_token: '8000510518.1677ed0.9365b1db65cb45368f00a2bc08ac5936'
})

// Set the router
// home page
app.get('/', (req, res) => {
    // // use the instagram package to get the profile's media
    ig.user_self_media_recent((err, medias, pagination, remaining, limit)  => {
        // render the home page and pass in popular images
        res.render('pages/index', { grams: medias })
    })
    // res.render('pages/index')
})

// Start the server
app.listen(8080)
console.log('App lives on port 8080');
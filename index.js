require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//importing router
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')//display the home page from the views
})

//making a route with wildcard operator
app.get('*', (req, res) => {
    res.render('error404')//display 404 page from the views
})

app.listen(process.env.PORT)

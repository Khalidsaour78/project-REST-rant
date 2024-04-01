require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//importing router
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//making a route with wildcard operator
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')//allows the 404 page route to return 404 status code
})

app.listen(process.env.PORT)

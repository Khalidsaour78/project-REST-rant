require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

//making a route with wildcard operator
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')//allows the 404 page route to return 404 status code
})

app.listen(process.env.PORT)

const React = require('react')//import react
const Def = require('./default')//import the default function

//creating the error404 stub function with def component as wrapper
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Ooops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404//exporting the error404 stub function

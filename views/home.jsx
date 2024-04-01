const React = require('react')//import react
const Def = require('./default')//import the default function

//creating the home stub function with def component as wrapper
function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }  

module.exports = home//exporting the home stub function

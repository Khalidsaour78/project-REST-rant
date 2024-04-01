const React = require('react')//import react
const Def = require('./default')//import the default function

//creating the error404 stub function with def component as wrapper
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Ooops, sorry, we can't find this page!</p>
              <div>
                <img src='/images/cute-cat.jpg' alt="cute cat photo"></img>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@madhatterzone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Manja Vitolic</a> on <a href="https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div> 
          </main>
      </Def>
    )
  }  

module.exports = error404//exporting the error404 stub function

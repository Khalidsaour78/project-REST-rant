const React = require('react')//import react
const Def = require('./default')//import the default function

//creating the home stub function with def component as wrapper
function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='/images/salad_and_juice.jpg' alt="salad and juice on black background"></img>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eiliv Aceron</a> on <a href="https://unsplash.com/photos/cooked-food-on-black-bowl-ZuIDLSz3XLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>  
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }  

module.exports = home//exporting the home stub function

const React = require('react')//import react
const Def = require('../default')//import the default function

//creating the index stub function with def component as wrapper
function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${index}`}>
              {place.name}
            </a>
          </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant and Rave About</h1>
              <div className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }  

module.exports = index//exporting the index stub function

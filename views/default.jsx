
const React = require('react')//importing react

//creating Def stub function and adding default html
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def//exporting the Def function
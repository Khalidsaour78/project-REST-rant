
const React = require('react')//importing react

//creating Def stub function and adding default html
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="StyleSheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="StyleSheet" href="/css/style.css" />            
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  
module.exports = Def//exporting the Def function
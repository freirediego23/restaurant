const express = require('express')
//const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || 'postgres://iwsondmswwmfzq:88f07239809e13637af0fd931d68a62fe2da48be778f885b214cf6a73de4a260@ec2-52-5-176-53.compute-1.amazonaws.com:5432/d5kpv29fa4j2k9?ssl=true'
const pool = new Pool({connectionString: connectionString});



express()
  //.use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
  .get('/data', handleRest)
  .set('view engine', 'ejs')
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  function handleRest (req, res) {

    var sql = "SELECT restname, restfood, restplace FROM restaurant";

    pool.query(sql, function(err, result) {
        //if error occurs
        if(err) {
            console.log("Error in query: ")
            console.log(err);
        }

        // Log this to the console for debugging purposes.
        console.log("Back from DB with result:");
        var a = res.send(JSON.stringify(result.columns));
        document.getElementById('list').innerHTML = a;

    });

    }
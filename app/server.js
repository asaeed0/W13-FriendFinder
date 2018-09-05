/* ----------------------------------------------------------
    DEPENDENCIES
---------------------------------------------------------- */

//  Installed
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//  Routing
const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes");


/* ----------------------------------------------------------
    EXPRESS DEPLOYMENT
---------------------------------------------------------- */

//  Initialization
const app = express();

//  Port selection
app.set('port', process.env.PORT || 3000);

//  Body Parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/* ----------------------------------------------------------
    ROUTING - EXPRESS
---------------------------------------------------------- */

//  Public Resources
app.use(express.static(path.join(__dirname, '/app/public/')));

//  Routing Utilization
htmlRoutes(app);
apiRoutes(app);


/* ----------------------------------------------------------
    PORT LISTENER
---------------------------------------------------------- */

app.listen(app.get('port'), () => {
    console.log(`Listening on port: ${app.get('port')}`);
});
const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = 3000;

var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home', 
    {
        thing1: "hello",
        thing2: "world"
    });
});
 
// Serve the fullcalendar package from node modules
app.use('/fullcalendar', express.static(__dirname + '/node_modules/@fullcalendar/'));

app.listen(PORT, () => {
    console.log("Listening on PORT ", PORT);
});
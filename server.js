// -------------------- REQUIRE EXPRESS -------------------- //
const express = require('express');
const app = express();


// -------------------- SET PORT -------------------- //
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});


// -------------------- REQUIRE DATABASE -------------------- //
require('./db/db.js');


// -------------------- MIDDLEWARE -------------------- //
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));




app.get('/', (req, res) => {
	res.send(`Server responding to req from app`);
});

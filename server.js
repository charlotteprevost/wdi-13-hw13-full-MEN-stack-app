// -------------------- REQUIRE EXPRESS ------------------------------- //
const express = require('express');
const app = express();


// -------------------- REQUIRE DATABASE ------------------------------ //
require('./db/db.js');


// -------------------- MIDDLEWARE/CONTROLLERS ------------------------ //
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dragonController = require('./controllers/dragonControllers.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/dragons', dragonController);


app.get('/', (req, res) => {
	res.send(`Server responding to req from app`);
});


// -------------------- SET PORT -------------------------------------- //
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

const express = require('express');

const router = express.Router();


// -------------------- REQUIRE MODEL -------------------- //
const Dragons = require('../models/dragonModel.js');



// ***************************************************************** //
// **************************** ROUTES ***************************** //
// ***************************************************************** //


// -------------------- NEW ROUTE ------------------------ //

router.get('/new', (req, res) => {
	// This is where I want to render the new.ejs with a form that will be filled
	res.render('new.ejs');
});


// -------------------- CREATE ROUTE --------------------- //

router.post('/', (req, res) => {
	// This is where I take the information gathered from the form and add it to our dragons database
	console.log("-------------------- This is where the info gathered lives --------------------\n", req.body);

	// Add gathered information to the database
	Dragons.create(
		req.body,
		(err, createdDragon) => {
			if (err) {console.log(`Error: ${err}`);}
			else {
				console.log("-------------------- Created Dragon --------------------\n", createdDragon);
				res.redirect('/dragons');
			}
		})
});


// -------------------- INDEX ROUTE ---------------------- //

router.get('/', (req, res) => {
	
})













module.exports = router;


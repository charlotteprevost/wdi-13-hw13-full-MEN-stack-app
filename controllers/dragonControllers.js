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
	console.log(`-------------------- This is where the info gathered lives --------------------\n`, req.body);

	Dragons.create(			// Add gathered information to the database
		req.body,
		(err, createdDragon) => {

			if (err) {console.log(`Error: `, err);}
			else {
				console.log(`-------------------- Created Dragon --------------------\n`, createdDragon);
				res.redirect('/dragons');
			}
		}
	)
});


// -------------------- INDEX ROUTE ---------------------- //
/*********** Show All the Dragons! ***********/

router.get('/', (req, res) => {

	Dragons.find(
		{},
		(err, allDragons) => {

			if (err) {console.log(`----------------------------------------Error: `, err);}
			else {
				console.log(`-------------------- All Dragons --------------------\n`, allDragons);
				res.render('index.ejs', {
					Dragons: allDragons
				})
			}
		}
	)
})


// -------------------- SHOW ROUTE ---------------------- //
/*********** Show One Dragon ***********/

router.get('/:id', (req, res) => {

	Dragons.findById(
		req.params.id,
		(err, foundDragon) => {
			if (err) {console.log(`----------------------------------------Error: `, err);}
			else {
				res.render('show.ejs', {
					Dragon: foundDragon
				});		
			}
		}
	);
});


// -------------------- EDIT ROUTE ---------------------- //
/*********** Edit One Dragon ***********/

router.get('/:id/edit', (req, res) => {
	
	Dragons.findById(
		req.params.id,
		(err, foundDragon) => {
			if (err) {console.log(`----------------------------------------Error: \n`, err);}
			else {
				console.log(`-------------------- Found Dragon --------------------\n`, foundDragon);
				res.render('edit.ejs', {
					Dragon: foundDragon
				})
			}
		}
	);
});

// -------------------- UPDATE ROUTE ---------------------- //
/*********** Update Database with Gathered Information ***********/

router.put('/:id', (req, res) => {
	
	Dragons.findByIdAndUpdate(
		req.params.id,
		req.body,
		(err, updatedDragon) => {
			if (err) {console.log(`----------------------------------------Error: \n`, err);}
			else {
				console.log(`-------------------- Updated Dragon --------------------\n`, updatedDragon);
				res.redirect('/dragons')
				
			}
		})

});











module.exports = router;


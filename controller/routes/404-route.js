import express from 'express';
const router = express.Router();

//% /404 Page Not Found
const fourOfour = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('404', (error, code) => {
		console.error(
			`${error}, There was an Error: PAGE NOT FOUND, 
			with following Error Code: ${code}`
		);
	});
	res.status(404);
});
export default fourOfour;

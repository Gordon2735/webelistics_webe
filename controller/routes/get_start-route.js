import express from 'express';
const router = express.Router();

//% /Getting Started page Route
const get_start = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('get_start');
});
export default get_start;

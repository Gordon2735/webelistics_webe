import express from 'express';

const app = express();
const router = express.Router();

const getType = router.get('/', (req, res, next) => {
	res.set('Content-Type', 'text/html');
	res.render('get_start');
	const cnType = app.get('/get_start', (req, res, next) => {
		const itsType = req.get('Content-Type');
		if (itsType === 'text/html') {
			return true;
		} else {
			return false;
		}
	});
});

export default cnType;

import express from 'express';
const router = express.Router();

//%  /About page Route
const about = router.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.render('about');
});
router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});
export default about;

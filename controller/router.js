import express from 'express';
import home from './routes/home-route.js';
import headers from './routes/header.js';
import about from './routes/about-route.js';
import get_start from './routes/get_start-route.js';
import fourOfour from './routes/404-route.js';
import fiveOO from './routes/500-route.js';

const app = express();
const router = express.Router();
app.use(express.static('../views/'));

router.use('/', home);
router.use('/about', about);
router.use('/get_start', get_start);
router.use('/headers', headers);
router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});
router.use('404', fourOfour);
router.use('500', fiveOO);
export default router;

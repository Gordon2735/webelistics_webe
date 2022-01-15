import express from 'express';
const router = express.Router();

//%  /Home page Route
const home = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('home');
	})
	.post('/', async (req, res) => {
		res.json(
			await user.create(req.body).catch(error => {
				res.status(400),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default home;

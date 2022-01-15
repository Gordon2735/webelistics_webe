import express from 'express';
const router = express.Router();

const headers = router.get('/headers', (req, res) => {
	res.set('Content-Type', 'text/html');
	var s = '';
	for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
	res.send(s);
	res.render('headers');
});
export default headers;

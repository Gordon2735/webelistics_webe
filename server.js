import dotenv from 'dotenv';
import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import { EventEmitter } from 'events';
import open from 'open';
import favicon from 'serve-favicon';
import logEvents from './logEvents.js';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import cors from 'cors';
import router from './controller/router.js';
import fs from 'fs';

dotenv.config();
const app = express();
const convertToNumber = '127.0.0.1';
const PORT = process.env.PORT || 7000;
const HOST = `http://${convertToNumber}:`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handlebars = create({
	extname: '.handlebars',
	defaultView: 'default',
	defaultLayout: 'main',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/',
	helpersDir: __dirname + '/views/partials/',
	helpers: {
		section: function (name, options) {
			if (!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		},
	},
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
// app.enable('view cache');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/src/img', 'favicon.ico')));
app.use('/', router);

router.use((req, res, next) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

app.listen(PORT, () => {
	console.info(`Nodemon Server listening on localhost ${HOST}${PORT}`);
});
//| ::::::::::::::::::::::::::::::::::::::
const openChrome = async () => {
	//& :::: Reason the why that HOST & PORT are strings? Look into it!!
	await open(`${HOST}${PORT}`, {
		app: { name: open.apps.chrome },
	}).catch((error, code) => {
		console.error(error, code);
	});
};
openChrome();

//% logEvent Logic
class TrackEmitter extends EventEmitter {}
const trackEmitter = new TrackEmitter();
trackEmitter.on('log', message => {
	logEvents(message);
});
setTimeout(() => {
	trackEmitter.emit('log', 'Nodemon Server Log event emitted');
}, 2000);

//% Create a write stream (in append mode)(morgan)
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'logs', 'access.log'),
	{ flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req, res) => {
	res.send('HOOT Webelistics Logger Tracker');
});

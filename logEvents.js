import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// __dirname in ES6 Usage:
const __dirname = path.resolve();

const logEvents = async message => {
	const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
	const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
	console.log(logItem);
	try {
		if (!fs.existsSync(path.join(__dirname, 'logs'))) {
			await fsPromises.mkdir(path.join(__dirname, 'logs'));
		} else {
			await fsPromises.appendFile(
				path.join(__dirname, 'logs', 'eventLog.txt'),
				logItem
			);
		}
	} catch (err) {
		console.error(err);
	}
};

export default logEvents;

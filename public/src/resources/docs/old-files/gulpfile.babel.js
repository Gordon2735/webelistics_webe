// import { series, parallel } from 'gulp';
import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import jest from 'gulp-jest';

// const jest = jest.default();
export default gulp.task('default', cb => {
	src('src/server.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(gulp.dest('dist'));
	gulp.task('jest', () => {
		return src('__tests__').pipe(
			jest({
				preprocessorIgnorePatterns: [
					'<rootDir>/dist/',
					'<rootDir>/node_modules/',
				],
				automock: false,
			})
		);
	});
	cb();
});

async function asyncAwaitTask() {
	const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	console.log(`Version: ${version}`);
	await Promise.resolve(
		`Task using Async/Await Version: ${version} JSON.parse has RUN !!`
	);
}

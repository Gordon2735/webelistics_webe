import { cnType } from './units/conType';

test('Returns true for the content type HTML', () => {
	expect(cnType()).toBe(true);
});

console.log(cnType);

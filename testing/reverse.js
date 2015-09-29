describe('The reverse filter', function () {
	beforeEach(module('sebastiansFilters'));
	it('reverses the order of chars', function () {
		inject(function (reverseFilter) {
			expect(reverseFilter('redrum')).toEqual('murder');
		});
	});
});
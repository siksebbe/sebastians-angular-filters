describe('The arraySort filter', function () {
	beforeEach(module('sebastiansFilters'));
	it('sort array to not contain copys', function () {
		inject(function (arraySortFilter) {

			expect(arraySortFilter(['1', '2', '3', '2'])).toEqual(['1', '2', '3']);
		});
	});
});
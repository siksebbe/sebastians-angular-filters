describe('The titleCase filter', function () {
	beforeEach(module('sebastiansFilters'));
	it('change to titleCase', function () {
		inject(function (titleCaseFilter) {

			expect(titleCaseFilter('sEbAsTiAn-gr')).toEqual('Sebastian-Gr');
		});
	});
});
'use strict';
angular.module('sebastiansFilters', [])
	.filter('reverse', function () {
		return function (input) {
			var i, out;
			if (angular.isString(input)) {
				out = '';
				for (i = 0; i < input.length; i++) {
					out = input.charAt(i) + out;
				}
				return out;
			} else {
				return input;
			}
		};
	}).filter('titleCase', function () {
		return function (input) {
			input = input || '';
			if (input.indexOf('-') > -1) {
				return (input || '').toLowerCase().replace(/(\b|-)\w/g, function (m) {
					return m.toUpperCase();
				});
			} else {
				return input.replace(/\w\S*/g, function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			}
		};
	}).filter('arraySort', function () {
		return function (input) {
			var i;
			var out = [];
			i = input;
			for (var q = 0; q < i.length; q++) {
				if (-1 === out.indexOf(i[q])) {
					out.push(i[q]);
				}
			}
			return out;
		};
	});
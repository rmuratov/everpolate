Tinytest.add("everpolate - Expected everpolate to not be undefined", function(test) {
	test.notEqual(typeof everpolate, 'undefined');
});

Tinytest.add('Linear interpolation function - Evaluates interpolating line at the number \'x\'', function(test) {
	test.equal(everpolate.linear(3, [0, 1, 2], [1, 3, 2]), [1]);
});

Tinytest.add('Linear interpolation function - Evaluates interpolating line at the set of numbers \'x1, x2,..., xn\'', function(test) {
	test.equal(everpolate.linear([2, 0, 8], [-2, 0, 6, 8], [4, 0, 3, -3]), [1, 0, -3]);
});

Tinytest.add('Polynomial interpolation function - Evaluates interpolating polynomial at the number \'x\'', function(test) {
	test.equal(everpolate.polynomial(3, [0, 1, 2], [1, 3, 2]), [-2]);
});

Tinytest.add('Polynomial interpolation function - Evaluates interpolating polynomial at the set of numbers \'x1, x2,..., xn\'', function(test) {
	test.equal(everpolate.polynomial([3, 0], [0, 1, 2], [1, 3, 2]), [-2, 1]);
});

Tinytest.add('Step interpolation function - Evaluates interpolating step function at the number \'x\'', function(test) {
	test.equal(everpolate.step(0.5, [0, 1, 2], [1, 3, 2]), [1]);
});

Tinytest.add('Step interpolation function - Evaluates interpolating step function at the set of numbers \'x1, x2,..., xn\'', function(test) {
	test.equal(everpolate.step([-12, 3.3, 9], [-2, 0, 6, 8], [4, 0, 3, -3]), [4, 0, -3]);
});

Tinytest.add('Linear regression function - Returns an object with slope, intercept and rSquared properties', function(test) {
	var xValues = [0, 1, 2, 3, 4, 5],
			yValues = [2, 3, 4, 5, 6, 7],
			regression = everpolate.linearRegression(xValues, yValues);
	test.equal(regression.slope, 1);
	test.equal(regression.intercept, 2);
	test.equal(regression.rSquared, 1);
});

Tinytest.add('Linear regression function - Returns a function which computes regression at a given x-value', function(test) {
	var xValues = [0, 1, 2, 3, 4, 5],
			yValues = [2, 3, 4, 5, 6, 7],
			regression = everpolate.linearRegression(xValues, yValues);
	test.equal(regression.evaluate(2), [4]);
});

Tinytest.add('Linear regression function - Returns a function which computes regression at a set of x-values', function(test) {
	var xValues = [0, 1, 2, 3, 4, 5],
			yValues = [2, 3, 4, 5, 6, 7],
			regression = everpolate.linearRegression(xValues, yValues);
	test.equal(regression.evaluate([2, 3.5]), [4, 5.5]);
});

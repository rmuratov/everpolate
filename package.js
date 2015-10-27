Npm.depends({'everpolate': '0.0.3'});

Package.describe({
	name: 'rmuratov:everpolate',
	version: '0.0.3',
	summary: 'Interpolation and extrapolation library',
	git: 'https://github.com/rmuratov/everpolate',
});

Package.onUse(function(api) {
	api.addFiles('server.js', 'server');
	api.addFiles('everpolate.browserified.js', 'client');
	api.export('everpolate', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('rmuratov:everpolate');
	api.addFiles('tests.js');
});

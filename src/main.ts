import newman from 'newman'; // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./collections/Postman_Echo.postman_collection_(1).json'),
    reporters: 'junit',
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
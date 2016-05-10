//Starting the Underscore.js rebuild


// each
var each = function (collection, callback) {

	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			exclaim(collection[i]);
		}
	} else {
		for (var key in collection) {
			callback(collection[key]);
		}
	}

};

var myArray = ['Good', 'morning', 'you', 'amazing', 'piece', 'of', 'work!'];

function exclaim (val) {
	console.log(val + '!!!');
}

each(myArray, exclaim);

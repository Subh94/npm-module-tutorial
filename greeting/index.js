function greeting(name, callback){
	var message = "Hello "+name+"!"
	callback(message);
}

module.exports.greeting = greeting;

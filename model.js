const mongoose = require('mongoose');
module.exports = function(ModelName, Schema){
	return mongoose.model(ModelName, Schema );
}




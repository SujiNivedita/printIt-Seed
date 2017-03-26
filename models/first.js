/**
 * Created by sathisu on 3/24/2017.
 */
// grab the mongoose module
var mongoose = require('mongoose');

// define our first model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('first', {
    name : {type : String, default: ''}
});
/**
 * Created by sathisu on 4/8/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var fileSchema = new Schema({
    name: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    file: {
        type: Object
    }
});

module.exports = mongoose.model('File', fileSchema);
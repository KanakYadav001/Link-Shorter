const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({

    url : {
        type : String,
        required : true,
    },
    nanoid : {
        type : String,
        required : true,
        unique : true,
    }

},{timestamps : true});

const LinkModel = mongoose.model('Link', LinkSchema);

module.exports = LinkModel;
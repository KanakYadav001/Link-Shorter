const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({

    url : {
        type : String,
        required : true,
    },
    uuid : {
        type : String,
        required : true,
    }

},{timestamps : true});

const LinkModel = mongoose.model('Link', LinkSchema);

module.exports = LinkModel;
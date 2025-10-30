const mongoose = require('mongoose'); 

const  OptionsSchema = new mongoose.Schema({
    option: String, 
    count: Number,
    },
    { _id: true } 
); 

const PollSchema = new mongoose.Schema({
    ownerId: {
        type: String, 
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    description: String,
    options: [OptionsSchema], 
    totalVotes: Number 
    },
    { id : true }
); 

const Poll = mongoose.model('Poll', PollSchema); 
module.exports = Poll;
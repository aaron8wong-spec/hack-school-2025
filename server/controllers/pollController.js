const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)
const getPolls = async() => {
    const poll = await Poll.find();
    console.log('This is running properly!');
    return poll;
    }

// ACTIVITY 2b - Implement getPoll function (get one poll by id)
const getPoll = async(id) => {
    const Id = id;
    const poll = await Poll.findbyId(Id).exec();
    console.log('This is running properly!');
    return poll;
    }

// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll

// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

// END ACTIVITY 3
module.exports = Poll;
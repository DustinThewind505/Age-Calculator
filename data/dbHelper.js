const db = require('./dbConfig');

module.exports = {
    // add,
    findHobbits,
    findHobbitById
}

// =========== GET Hobbits ===========
function findHobbits() {
    return db('hobbits')
}

// =========== GET Hobbits by id ===========
function findHobbitById(id) {
    return db('hobbits').where({id})
}



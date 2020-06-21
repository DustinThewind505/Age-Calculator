const db = require('./dbConfig');

module.exports = {
    add,
    findHobbits,
    findHobbitById,
    update,
    remove
}

// =========== GET Hobbits ===========
function findHobbits() {
    return db('hobbits')
}

// =========== GET Hobbit by id ===========
function findHobbitById(id) {
    return db('hobbits').where({ id })
}

// =========== POST Hobbit ===========
function add(hobbit) {
    return db('hobbits').insert(hobbit, "id")
        .then(([id]) => findHobbitById(id))
}

// =========== PUT Hobbit ===========

function update(changes, id) {
    return db('hobbits').where({ id }).update(changes)
        .then(() => findHobbitById(id))
}

// =========== DELETE Hobbit ===========
function remove(id) {
    return db('hobbits').where({ id }).del()
}



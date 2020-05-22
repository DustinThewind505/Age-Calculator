const db = require('./db-config');

// db.select('*').from('users');

db('users').insert({ name: "Leo", age: 99 });

db('users').where({id: 1}).update({ age: 88 });

db('users').where({id: 1}).delete()
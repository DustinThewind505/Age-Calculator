
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hobbits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert([
        {name: "Bilbo Baggins", age: 111},
        {name: "Frodo Baggins", age: 34},
        {name: "Samwise Gamgee", age: 36}
      ]);
    });
};

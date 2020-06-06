
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vampires').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vampires').insert([
        {name: "Blade", dayWalker: true},
        {name: "Edward Cullins", dayWalker: true},
        {name: "Dustin Guillen", dayWalker: true}
      ]);
    });
};

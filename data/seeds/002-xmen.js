
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('xmen').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('xmen').insert([
        {name: "Cyclops", ability: "Laser portal eyes"},
        {name: "Jean Gray", ability: "Telekenesis"},
        {name: "Storm", ability: "Controls the elements"}
      ]);
    });
};

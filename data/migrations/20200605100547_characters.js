
exports.up = function (knex) {
    return knex.schema
        .createTable('hobbits', table => {
            table.increments();
            table.text('Name', 30).unique().notNullable();
            table.integer('Age').notNullable();
            // table.integer('Alignment').notNullable();
        })
        .createTable('xmen', table => {
            table.increments();
            table.text('Name', 30).unique().notNullable();
            table.text('Ability', 138).notNullable();
            // table.integer('Alignment').notNullable();
        })
        .createTable('vampires', table => {
            table.increments();
            table.text('Name', 30).unique().notNullable();
            table.boolean('DayWalker').defaultTo(false);
            // table.integer('Alignment').notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("hobbits")
        .dropTableIfExists("xmen")
        .dropTableIfExists("vampires")
};

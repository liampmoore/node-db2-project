
exports.up = function(knex) {
  return knex.schema.createTable('cars', async tbl => {
    tbl.increments();
    tbl
      .string("vin", 17)
      .notNullable()
      .unique()
      .index();

    tbl
      .string("make", 255)
      .notNullable();
    tbl
      .string("model", 255)
      .notNullable();
    tbl
      .decimal("mileage", 5, 2)
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

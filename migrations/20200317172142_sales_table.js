
exports.up = function(knex) {
    return knex.schema.createTable('sales', async tbl => {
        tbl.increments();
        tbl
          .string("customer", 255)
          .notNullable();
        tbl
          .string("customer_phone", 22)
          .notNullable();
        tbl
          .decimal("sale_price", 10, 2)
          .notNullable();
        tbl
            .string("vin")
            .references('vin')
            .inTable("cars")
            .notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sales");
  
};

exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.string("status", 80)
    tbl.string("transmission", 80)
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("status");
    tbl.dropColumn("transmission")
  });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, customer: 'Ben Bikely', customer_phone:"4444324412", sale_price: 23333.23, vin: "12345678901234567"}
      ]);
    });
};

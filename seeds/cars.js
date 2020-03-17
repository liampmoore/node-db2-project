
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '12345678901234567', make: "Toyota", model: "Speedcar", mileage: 60.42},
        {id: 2, vin: '12345678901234568', make: "Heyundai", model: "Spinetta", mileage: 42.42},
        {id: 3, vin: '12345678901234569', make: "Fjord", model: "Trucker", mileage: 59.49}
      ]);
    });
};

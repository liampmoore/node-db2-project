const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store car data" });
    });
});

module.exports = router;

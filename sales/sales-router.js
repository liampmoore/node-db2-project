const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("sales")
    .then(sales => {
      res.json(sales);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve sales" });
    });
});

router.get("/:id", (req, res) => {
  db("sales")
    .where({ id: req.params.id })
    .first()
    .then(sale => {
      res.json(sale);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve sale" });
    });
});

router.post("/", (req, res) => {
  db("sales")
    .insert(req.body, "id")
    .then(ids => {
      db("sales")
        .where({ id: ids[0] })
        .then(newSale => {
          res.status(201).json(newSale);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store sale data" });
    });
});

module.exports = router;

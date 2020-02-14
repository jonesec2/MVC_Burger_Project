const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

router.get("/", function (req, res) {
   burger.selectAll(function (data) {
      var burgerObject = {
         burger: data
      };
      res.render('index', burgerObject);
   });
})

router.post("/api/burgers", function (req, res) {
   burger.newBurger([
      "burger_name", "devoured"
   ], [
      req.body.burger_name, 0
   ], function (result) {
      console.log("burger_controller " + result)
      res.json({ burger_id: result.insertId })
   });
});

// router.put
router.put("/api/burgers/:id", function (req, res) {
   var id = req.params.id;

   // these are the parameters to send to burger
   burger.updateBurger(
   // value for burger parameter setColumn
   [
      "devoured"
   ],
   // value for burger parameter devoured 
   [
      1
   ],
   // value for burger parameter whereColumn
   [
      "burger_id"
   ],
   // value for burger parameter id
   [
      id
   ],
   // creating call back function for burger parameter cb 
   function (result) {
      if (result.changedRows === 0) {
         return res.status(404).end();
      }
      else {
         res.status(200).end();
      }
   });
});

// export route to server.js
module.exports = router;
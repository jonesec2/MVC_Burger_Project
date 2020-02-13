const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

router.get("/", function(req, res) {
   burger.selectAll(function(data) {
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
      res.json({ burger_id: result.insertId})
   })
})

// router.put

// export route to server.js
module.exports = router;
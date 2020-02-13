const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

router.get("/", function(req, res) {
   burger.selectAll(function(data) {
      var burgerObject = { 
         burger: data
      };
      console.log(data)
      console.log(burgerObject);
      res.render('index', burgerObject);
   });
})

// router.post

// router.put

// export route to server.js
module.exports = router;
const orm = require("../config/orm.js");

var burger = {
   selectAll: function (cb) {
      orm.selectAll("burgers", function(res) {
         cb(res);
      }) 
   },
   newBurger: function (columns, values, cb) {
      orm.insertOne("burgers" , columns, values, function(res) {
         console.log("burger ", res)
         cb(res)
      });
   },
   // parameter to receive values from burger_controller
   updateBurger: function (setColumn, devoured, whereColumn, id, cb) {
      // setting parameter to send to orm
      orm.updateOne("burgers", setColumn, devoured, whereColumn, id, function(res) {
         console.log("burger", res)
         // returning results to burger_controller
         cb(res)
      });
   }
}

module.exports = burger;
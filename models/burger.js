const orm = require("../config/orm.js");

var burger = {
   selectAll: function (cb) {
      orm.selectAll("burgers", function(res) {
         cb(res);
      }) 
   },
   newBurger: function (columns, values, cb) {
      orm.insertOne("burgers" , columns, values, function(res) {
         console.log("burger " +res)
         cb(res)
      });
   }
   // ,
   // updateOne: function () {
   //    orm.updateOne( {

   //    })
   // }
}

module.exports = burger;
const connection = require('./connection')

const orm = {
   selectAll: function (tableInput, cb) {
      var queryString = "Select * from " + tableInput + ";";
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      })
   }
   // ,


   // insertOne: function () {

   // },
   // updateOne: function () {

   // }

}

module.exports = orm;
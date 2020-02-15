const connection = require('./connection')

function printQuestionMarks(num) {
   var arr = [];

   for (var i = 0; i < num; i++) {
      arr.push("?");
   }
   console.log(arr.toString())
   return arr.toString();
}

const orm = {
   selectAll: function (tableInput, cb) {
      var queryString = "Select * from " + tableInput + ";";
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      })
   },
   insertOne: function (table, columns, values, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += columns.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(values.length);
      queryString += ") ";

      console.log("orm " + queryString);
      connection.query(queryString, values, function (err, result) {
         if (err) {
            throw err;
         }
         console.log("ormRes " + result);
         cb(result);
      });

   },
   // Update existing record and send info back to burger
   // parameter to receive values from burger
   updateOne: function (table, setColumn, devoured, whereColumn, id, cb) {
      // creating sql query
      var queryString = "Update " + table + " Set " + setColumn + " = " + devoured + " where " + whereColumn + " = " + id + ";";
      // sending sql query
      console.log(queryString)
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         console.log("ormRes", result);
         // returning results to burger
         cb(result);
      });
   },
   delete: function (table, whereColumn, id, cb) {
      var queryString = "Delete From " + table + " where " + whereColumn + " = " + id + ";";
      console.log(queryString);
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         console.log("ormRes", result);
         cb(result);
      });
   }

}

module.exports = orm;
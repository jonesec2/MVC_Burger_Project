const connection = require('./connection')

function printQuestionMarks(num) {
   var arr = [];

   for (var i = 0; i < num; i++) {
      arr.push("?");
   }
   console.log(arr.toString())
   return arr.toString();
}

// function objToSql(ob) {
//    var arr = [];

//    for (var key in ob) {
//       var value = ob[key];
//       if (Object.hasOwnProperty.call(ob, key)) {
//          if (typeof value === "string" && value.indexOf(" ") >= 0) {
//             value = "'" + value + "'";
//          }
//          arr.push(key + "=" + value);
//       }
//    }
//    return arr.toString();
// }


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
      connection.query(queryString, values, function(err, result) {
         if (err) {
            throw err;
         }
         console.log("ormRes " + result)
         cb(result)
      });

   }
   // ,
   // updateOne: function () {

   // }

}

module.exports = orm;
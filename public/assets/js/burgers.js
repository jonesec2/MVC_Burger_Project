$(function () {

   // POST function
   $(".create-form").on("submit", function (event) {
      event.preventDefault();

      var newBurger = {
         burger_name: $("#burger").val().trim(),
         devoured: 0
      };
      console.log(newBurger)

      // sending POST request from client to server
      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(
         function () {
            // Reload the page to get the updated list
            location.reload();
         }
      );
   });

   // PUT function

   $('.change-devoured').on("click", function(event) {
      var id = $(this).data("id"); // will equal id on button
      // var devouredState = $(this).data("devoured"); // will always = 0 

      // setting new var equal to id/devoured of burger clicked
      var nowDevoured = {
         burger_id: id
         // devoured: 1
      };
      console.log(nowDevoured)
      // sending PUT request from client to server
      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: nowDevoured
      }).then(
         function () {
            console.log("devoured", nowDevoured)
            location.reload();
         }
      )
   });

   $('.delete').on('click', function(event) {
      var id = $(this).data("id");

      console.log("Now deleting");
      $.ajax("/api/burgers/" +id, {
         type: "DELETE",
      }).then(
         function() {
            console.log("returned")
            location.reload();
         }
      )
   })
});


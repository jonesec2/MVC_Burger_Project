$(function () {
   $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      // console.log($("#burger").val().trim())

      var newBurger = {
         burger_name: $("#burger").val().trim(),
         devoured: 0
      };
      console.log(newBurger)

      // Send the POST request.
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
});

$(".burger_id").click(function(event){

var id=this.attr("data-burger");
  var newState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed devoured to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
});

$("submit").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    name: $("#ca").val().trim(),
    sleepy: $("[name=sleepy]:checked").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/burger", {
    type: "POST",
    data: newCat
  }).then(
    function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

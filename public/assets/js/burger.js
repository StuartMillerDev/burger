
$(function(){
  $(".burger_id").on("click",function(event){
  event.preventDefault();
  var id=$(this).attr("data-burger");
    var newState = {
          devoured: true
        };
        console.log("UPDATE BURGER: ",  id);
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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
    };
  console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

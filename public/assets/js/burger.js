
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

    var newBurger = $(".ca").val().trim();
    var data={
      burger_name:newBurger
    }
  console.log("NEW BURGER NAME: ",newBurger);
    // Send the POST request.
    $.ajax({
      url: "/api/burger",
      type: "POST",
      data: data,
      dataType: "text",
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    ).fail(function(err) {
    console.log(err);
  })
  });

});

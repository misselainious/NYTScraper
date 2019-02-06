
// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  console.log("this ID:",thisId)

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");

  //Alert the user their note was saved:
  alert("Your note was saved!");
});


// When user clicks the delete button for a note
$(document).on("click", "#deletenote", function() {
  // Save the p tag that encloses the button
  var selected = $(this).attr("data-id");
  console.log(selected, "<-Selected");
  // Make an AJAX GET request to delete the specific note
  // this uses the data-id of the p-tag, which is linked to the specific note
  $(this).parents(".parentdiv").remove();
  $.ajax({
    type: "DELETE",
    url: "/deletenote/" + selected
  })
});

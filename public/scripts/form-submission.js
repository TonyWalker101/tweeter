$(document).ready(function() {

  $(".tweet-form").submit(function(event) {
    event.preventDefault();
    
    const textLength = $(this).serializeArray()["0"].value.length;

    if (textLength === 0) {
      alert("Please type your Tweet in order to submit!");
    } else if (textLength > 140) {
      alert("Please reduce the number of characters in your Tweet in order to submit! (Max: 140)");
    } else {
      console.log("Form submitted...performing ajax call");
  
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/tweets",
        data: $(this).serialize()
      }).then(response => {
        console.log("Successfully posted to the server using Ajax.");
      });
    }

  });
  
});
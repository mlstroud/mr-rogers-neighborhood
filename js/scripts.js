function getOutput(input) {
  var result = "";

  if (isNaN(input)) {
    result = "Error, not a number.";
  }

  return result;
};


$(document).ready(function() {

  $("#get-number").submit(function(event) {
    var input = parseInt($("#input-number").val());
    var output = getOutput(input);
  
    $("#result").text(output);
    event.preventDefault();
  });
});
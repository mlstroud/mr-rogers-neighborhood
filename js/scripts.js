function getOutput(input) {
  return input;
};


$(document).ready(function() {

  $("#get-number").submit(function(event) {
    var input = $("#input-number").val();
    var output = getOutput(input);
  
    $("#result").text(output);
    event.preventDefault();
  });
});
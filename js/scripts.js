function getOutput(input) {
  var result = "";

  if (isNaN(input)) {
    result = "Error, not a number.";
  }
  else {
    
    var digits = input.toString();
    var parsedDigits = [];

    for (var index = 0; index < digits.length; index++) {
      parsedDigits.push(digits[index]);
    }

  }

  result = parsedDigits.join();
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
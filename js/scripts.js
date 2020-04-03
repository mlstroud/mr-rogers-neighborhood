
// BUSINESS LOGIC ====================================================================

function getInput() {
  var userInput = parseInt($("#input-number").val());

  return userInput;
};

function getOutput(inputNumber) {

  if (isNaN(inputNumber)) {
    return "Error, not a number.";
  }
  else {
    var result = [];
    var digits = [];

    for (var currentNumber = 0; currentNumber <= inputNumber; currentNumber++) {
      var digits = currentNumber.toString();

      if(digits.includes("3")) {
        result.push("Won't you be my neighbor?");
      }
      else if (digits.includes("2")) {
        result.push("Boop!");
      }
      else if (digits.includes("1")) {
        result.push("Beep!");
      }
      else {
        result.push(currentNumber);
      }
    }
  }

  return result.join(", ");
};

// USER INTERFACE ====================================================================

$(document).ready(function() {

  var formSubmitted = false;

  $("#get-number").submit(function(event) {

    var userInput = getInput();
    var result = getOutput(userInput);

    if(formSubmitted === true) {
      $("#result").fadeOut('slow', function() {
        $("#result").text("");
        $("#result").text(result);
      });

      $("#result").fadeIn('s');
    }
    else {
      $("#result").text(result);
      $("#result").fadeIn();
      formSubmitted = true;
    }
    event.preventDefault();
  });
});
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


$(document).ready(function() {

  $("#get-number").submit(function(event) {
    var userInput = getInput();
    var result = getOutput(userInput);
  
    $("#result").text(result);
    event.preventDefault();
  });
});
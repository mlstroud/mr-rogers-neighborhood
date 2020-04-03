
// BUSINESS LOGIC ====================================================================

function getInput(returnType) {
  var userInput = [];

  userInput.push(parseInt($("#input-number").val()));
  userInput.push($("#input-name").val());
  userInput.push($("input[name=direction]:checked").val());

  if(returnType === "number") {
    return userInput[0];
  }
  else if(returnType === "name") {
    return userInput[1];
  }
  else if(returnType === "direction") {
    return userInput[2];
  }
  else {
    return "Error, could not retrieve data.";
  }
};

function getOutput(inputNumber, inputName, inputDirection) {

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
      else if (currentNumber % 3 === 0) {


      }
      else {
        result.push(currentNumber);
      }
    }
  }

  if(inputDirection === "normal") {
    return result.join(", ");
  }
  else {
    result.reverse();
    return result.join(", ");
  }
};

// USER INTERFACE ====================================================================

$(document).ready(function() {

  var formSubmitted = false;

  $("#get-number").submit(function(event) {

    var userNumber = getInput("number");
    var userName = getInput("name");
    var direction = getInput("direction");
    var result = getOutput(userNumber, userName, direction);

    if(formSubmitted === true) {
      $("#result").fadeOut('slow', function() {
        $("#display-result").text("");
        $("#display-result").text(result);
      });

      $("#result").fadeIn('s');
    }
    else {
      $("#display-result").text(result);
      $("#result-box").fadeIn();
      formSubmitted = true;
    }
    event.preventDefault();
  });
});
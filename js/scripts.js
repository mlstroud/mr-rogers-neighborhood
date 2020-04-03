function getOutput(input) {
  var result = "";

  if (isNaN(input)) {
    return "Error, not a number.";
  }
  else {
    var resultArray = [];
    var digits = 0;

    for (var index = 0; index <= input; index++) {
      var digits = index.toString();

      if(digits.includes("3")) {
        resultArray.push("Won't you be my neighbor?");
      }
      else if (digits.includes("2")) {
        resultArray.push("Boop!");
      }
      else {
        resultArray.push(index);
      }
    }

  }

  result = resultArray.join(", ");
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
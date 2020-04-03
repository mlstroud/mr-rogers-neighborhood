function getOutput(input) {
  var result = "";

  if (isNaN(input)) {
    result = "Error, not a number.";
  }
  else {
    var resultArray = [];
    var digits = 0;

    for (var index = 0; index <= input; index++) {
      var digits = index.toString();

      if(digits.includes("3")) {
        resultArray.push("Won't you be my neighbor?");
      }
      else {
        resultArray.push(index);
      }
    }

  }

  result = resultArray.join();
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
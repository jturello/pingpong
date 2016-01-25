var pingpong = function(userNumber) {

  var userInteger = parseInt(userNumber);

  var generatedNumberList = [];

  for(var i=1; i <= userInteger; i++){

    if ((i%3===0) && (i%5===0)){
      generatedNumberList.push('pingpong');
    } else if((i%3 === 0) && !(i%5===0)){
      generatedNumberList.push('ping');
    } else if ((i%5 === 0) && !(i%3===0)){
      generatedNumberList.push('pong');
    } else {
      generatedNumberList.push(i);
    }
  }
  return generatedNumberList;
};

$(document).ready(function() {

  $("button#btnSubmit").click(function(event) {
    $("#output").empty();

    var userEntry = parseInt($(numberInputField).val());

      $("#submitForm")[0].reset();

      if((userEntry<1) || isNaN(parseInt(userEntry))){
        console.log("Invalid entry. Please enter positive integers only.");
        $("#submitForm")[0].reset();
        return;
    }

    var resultArray = pingpong(userEntry);

    for (var i = 0; i < resultArray.length; i++){
      $("ul#output").append("<li>" + resultArray[i] +  " " + "</li>");
    }

    event.preventDefault();

    });
});

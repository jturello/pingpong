var pingpong = function(userNumber) {

    var generatedNumberList = [];

    if(userNumber<1){
      return "Invalid entry. Please enter positive integers only.";
    }

    for(var i=1; i <= userNumber; i++){

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
    return generatedNumberList.join();
  };

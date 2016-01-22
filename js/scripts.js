var pingpong = function(userNumber) {

    var generatedNumberList = [];
    
    for(var i=1; i <= userNumber; i++){
      generatedNumberList.push(i);
    }
    return generatedNumberList.join();
  };

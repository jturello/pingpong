var pingpong = function(userNumber) {

    var generatedNumberList = [];

    for(var i=1; i <= userNumber; i++){
      alert("i: " + i + ", userNumber: " + userNumber + ", userNumber%3: " + userNumber%3);
      if (i % 3 === 0){
        generatedNumberList.push('ping');
      } else if (i%5 === 0){
        generatedNumberList.push('pong');
      } else {
        generatedNumberList.push(i);
      }
    }
    return generatedNumberList.join();
  };

describe('pingpong', function() {
  it("displays list of numbers from 1 to the number the user enters", function() {
    expect(pingpong(2).join(' ')).to.equal('1 2');
  });

  it("displays 'ping' in place of numbers divisible by 3 but not also by 15", function() {
    expect(pingpong(3).join(' ')).to.equal('1 2 ping');
  });

  it("returns 'pong' in place of numbers divisible by 5 but not also by 15", function() {
    expect(pingpong(5).join(' ')).to.equal('1 2 ping 4 pong');
  });

  it("returns 'pingpong' in place of numbers divisible by 15", function(){
    expect(pingpong(15).join(' ')).to.equal('1 2 ping 4 pong ping 7 8 ping pong 11 ping 13 14 pingpong');
  });

  it("stips off decimals converting floats entered by the user to integers and continues to process accordingly", function() {
    expect(pingpong(3.222).join(' ')).to.equal('1 2 ping');
  });

});


/*
describe($("button#btnSubmit").click, function() {
  it("returns error message 'Invalid entry. Please enter positive integers only.' when the user enters negative numbers", function(){
    expect($("button#btnSubmit").trigger({type: "click", numberInputField: '-1'}).to.equal('Invalid entry. Please enter positive integers only.'));
    });

  it("returns error message 'Invalid entry. Please enter positive integers only.' when the user enters a string", function(){
    expect(pingpong("string")).to.equal('Invalid entry. Please enter positive integers only.');
  });
});
*/

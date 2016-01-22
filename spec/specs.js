describe('pingpong', function() {
  it("displays list of numbers from 1 to the number the user enters", function() {
    expect(pingpong(2)).to.equal('1,2');
  });

  it("displays 'ping' in place of any number in the generatedNumberList that is a multiple of 3", function() {
    expect(pingpong(3)).to.equal('1,2,ping');
  });
});

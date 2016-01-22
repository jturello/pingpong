describe('pingpong', function() {
  it("displays list of numbers from 1 to the number the user enters", function() {
    expect(pingpong(2)).to.equal('1,2');
  });

  it("displays 'ping' in place of numbers divisible by 3 in generatedNumberList", function() {
    expect(pingpong(3)).to.equal('1,2,ping');
  });

  it("returns 'pong' in place of numbers divisible by 5 in generatedNumberList", function() {
    expect(pingpong(5)).to.equal('1,2,ping,4,pong');
  });
});

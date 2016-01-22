describe('pingpong', function() {
  it("displays list of numbers from 1 to the number the user enters", function() {
    expect(pingpong(3)).to.equal('1,2,3');
  });
});

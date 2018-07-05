var C20 = artifacts.require("./C20.sol");

contract('C20', function() {
    it("should get address of C20 contract", function() {
      return C20.deployed().then(function(instance) {
        console.log(instance.address);
        assert.notEqual(instance.address, 0, "Returned 0 address");
        });
    });
});

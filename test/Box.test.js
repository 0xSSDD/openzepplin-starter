const { ethers, deployments } = require("hardhat");

describe('Box', () => {
  

  beforeEach(async () => {
    let box;
    const accounts = await ethers.getSigners();
    await deployments.fixture();

    const Box = await deployments.get("Box");
    box = new ethers.Contract(Box.address, Box.abi, accounts[0])
    
  })

  describe('Box tests', async() => {
    // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await box.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('42');
  });
  });
  

});
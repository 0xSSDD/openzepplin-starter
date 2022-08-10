// scripts/index.js
async function main () {
  // Our code will go here
  // Retrieve accounts from the local node
  const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const Box = await ethers.getContractFactory('Box');
  const box = await Box.attach(address);

  await box.store(23);
  // Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve();
  console.log('Box value is', value.toString());

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
const newFun = () =>
  console.log("this code is executed inside the module when require is run");
module.exports.santhoshFun = () =>
  console.log("Santhosh has written a cool function");

newFun();

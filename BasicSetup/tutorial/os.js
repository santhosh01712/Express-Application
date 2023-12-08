const os = require("os");
// user info
console.log(os.userInfo());

// system up time
console.log(os.uptime());

console.log(os.type(), os.release(), os.totalmem(), os.freemem());

const os = require("os");
// info about current user .
const user = os.userInfo();
console.log(user);
// uptimes
console.log(`the system uptime is ${os.uptime / 60 / 60} h`);
const cuurentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1024,
};
console.log(cuurentOS);

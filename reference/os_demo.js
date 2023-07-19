// ? The main purpose of the os module is that it will give us the information about the environment in which we are working on and which os we are using
const os = require("os");
// todo: Platform
console.log(os.platform()); // ! OUTPUT : darwin
// todo: CPU Arch
console.log(os.arch()); //! OUTPUT: arm64
//  todo: CPU core info
console.log(os.cpus());
// !OUTPUT:
// [
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 353010, nice: 0, sys: 285920, idle: 3286900, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 325820, nice: 0, sys: 259060, idle: 3343170, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 275160, nice: 0, sys: 211140, idle: 3445790, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 238490, nice: 0, sys: 174250, idle: 3522480, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 260250, nice: 0, sys: 50010, idle: 3632160, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 192400, nice: 0, sys: 37470, idle: 3713620, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 139470, nice: 0, sys: 24930, idle: 3780030, irq: 0 }
//     },
//     {
//       model: 'Apple M1',
//       speed: 24,
//       times: { user: 101730, nice: 0, sys: 17570, idle: 3825940, irq: 0 }
//     }
//   ]
// todo: System free Memory
console.log(os.freemem()); // ! OUTPUT: 33423360
// todo: System Total Memory
console.log(os.totalmem()); // ! OUTPUT: 8589934592
// todo: Home Directory
console.log(os.homedir()); //! OUTPUT: /Users/ammarahmad
// todo: System Up time (ON time)
console.log(os.uptime());  //! OUTPUT: 7564


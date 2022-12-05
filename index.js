let userInfo = require('./information.js');


let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${userInfo.myName} and I study at ${userInfo.myCampus}`,
    e : "oO",
    T : "U "
}));

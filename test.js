var SBS1 = require('./sbs1');

function tst(l) {
  console.log(l);
}

sbs = new SBS1('127.0.0.1', tst);
sbs.run();
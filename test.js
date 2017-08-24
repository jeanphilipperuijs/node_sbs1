var SBS1 = require('./sbs1');

function tst(l) {
  console.log(l);
}

sbs = new SBS1('dump1090.host', tst);
sbs.run();
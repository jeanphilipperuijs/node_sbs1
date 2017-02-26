var net = require('net');

class SBS {
  constructor(host, port, cb) {
    this.host = host;
    this.port = port;
    this.cb = cb;
    this.client = new net.Socket();
  }

  run() {
    let self = this;
    console.log('run');
    this
      .client
      .connect(this.port, this.host, function () {
        console.log('Connected', self.port, self.host);
      });

    this
      .client
      .on('data', function (data) {
        let row = data
          .toString()
          .trim();
        self.cb(row);
      });

    this
      .client
      .on('close', function () {
        console.log('Connection closed');
      });
  }
}

function tst(l) {
  console.log(l);
}
sbs = new SBS('127.0.0.1', 30003, tst);
sbs.run();
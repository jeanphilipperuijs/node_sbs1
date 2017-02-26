var net = require('net');

class TCPSocket {
  constructor(host,port, cb) {
    this.host = host;
    this.port = port;
    this.cb = cb;
  }

  run() {
    this.client = new net.Socket();
    let self = this;
    this
      .client
      .connect(this.port, this.host, function () {
        console.log('TCPSocket', self.port, self.host);
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
        console.log('TCPSocket closed');
      });
  }
}
module.exports = TCPSocket
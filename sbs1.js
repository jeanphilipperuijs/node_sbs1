var TCPSocket = require('./tcpsocket');

class SBS1 extends TCPSocket {
  constructor(host, cb) {
    super();
    this.port = 30003;
    this.cb = cb;
  }
}
module.exports = SBS1
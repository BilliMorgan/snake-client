const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("server output: ", data)
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: BIL")
    conn.write("Move: up")
    
  })
  return conn;
};

module.exports = { connect };
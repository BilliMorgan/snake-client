const handleUserInput = (key) => {
  if (key === "\x03") {
    console.log("poshol na fig");
    process.exit();
  } 
  if (key === "a") {
    connection.write("Move: left");
  } 
  if (key === "w") {
    connection.write("Move: up");
  } 
  if (key === "s") {
    connection.write("Move: down");
  } 
  if (key === "d") {
    connection.write("Move: right");
  } 
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key)
  })
  return stdin;
};
//setupInput();

module.exports = { setupInput };
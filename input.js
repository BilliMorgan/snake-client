const handleUserInput = (key) => {
  if (key === "\x03") {
    console.log("poshol na fig");
    process.exit();
  }
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key)
  })
  return stdin;
}
setupInput();

module.exports = { setupInput };
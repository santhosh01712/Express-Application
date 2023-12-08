const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name) => {
  if (name === "Santhosh") {
    console.log("data received");
  }
});

customEmitter.on("response", () => console.log("differenet logic"));

customEmitter.emit("response", "Santhosh");
customEmitter.emit("response", "Srinivasan");

customEmitter.emit("response");

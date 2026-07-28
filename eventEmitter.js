import { EventEmitter } from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Logged In ${name}`);
};
const starts = () => {
    console.log(" System Started");
};
task.once("greet", starts);
task.on("greet", sayHi);
task.on("greet",(name) => {
    console.log`( ${name})`
}
task.emit("greet"," Aman Verma");
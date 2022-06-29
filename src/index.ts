import { Greeter } from "./greeters";
import { HtmlGreeter } from "./htmlgreeter";
import { LoudGreeter } from "./loudgreeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";

const promptly = require("promptly");

(async () => {
  const name = await promptly.prompt("Name: ");
  let greeter = new Greeter("Hello");
  console.log(greeter.greet(name));

  let htmlGreeter = new HtmlGreeter("Hello there");
  console.log(htmlGreeter.greet(name));

  let jsGreeter = new JavaScriptGreeter("Welcome");
  console.log(jsGreeter.greet(name));

  let loudGreet = new LoudGreeter("HEY");
  loudGreet.addVolume();
  loudGreet.addVolume();
  console.log(loudGreet.greet(name));
})();

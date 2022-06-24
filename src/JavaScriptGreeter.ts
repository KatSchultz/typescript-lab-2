import { Greeter } from "./greeters";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${this.greeting}, ${name}!')`;
  }
}

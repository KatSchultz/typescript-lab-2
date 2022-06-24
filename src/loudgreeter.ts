import { Greeter } from "./greeters";

export class LoudGreeter extends Greeter {
  private extra = "!";
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}

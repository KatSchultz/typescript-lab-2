import { Greeter } from "../src/greeters";
import { JavaScriptGreeter } from "../src/JavaScriptGreeter";
import { LoudGreeter } from "../src/loudgreeter";
import { HtmlGreeter } from "../src/htmlgreeter";

describe("Greeting Parent Class", () => {
  test("Greeting returns a greeting with name", () => {
    const result = new Greeter("Hello");
    expect(result.greet("Katie")).toBe("Hello, Katie!");
  });
  test("Greeting returns a longer greeting", () => {
    const result = new Greeter("Great to see you");
    expect(result.greet("Tom")).toBe("Great to see you, Tom!");
  });
});

describe("JavaScriptGreeter", () => {
  test("Overwrites method from Greeter", () => {
    const result = new JavaScriptGreeter("Good evening");
    expect(result.greet("Marissa")).toBe(
      `console.log('Good evening, Marissa!')`
    );
  });
  test("Overwrites method from Greeter", () => {
    const result = new JavaScriptGreeter("Hello there");
    expect(result.greet("Mary")).toBe(`console.log('Hello there, Mary!')`);
  });
});

describe("LoudGreeter", () => {
  test("Call LoudGreeter without add Volume", () => {
    const result = new LoudGreeter("Good evening");
    expect(result.greet("Marissa")).toBe("Good evening, Marissa!!");
  });
  test("Call LoudGreeter with add Volume", () => {
    const result = new LoudGreeter("Good evening");
    result.addVolume();
    expect(result.greet("Marissa")).toBe("Good evening, Marissa!!!");
  });
  test("Call LoudGreeter after addVolume 3x", () => {
    const result = new LoudGreeter("Good evening");
    result.addVolume();
    result.addVolume();
    result.addVolume();
    expect(result.greet("Marissa")).toBe("Good evening, Marissa!!!!!");
  });
});

describe("HtmlGreeter", () => {
  test("Call HtmlGreeter and receive a string with tags", () => {
    const result = new HtmlGreeter("Good evening", "p");
    expect(result.greet("Marissa")).toBe(`<p>Good evening, Marissa!</p>`);
  });
  test("Call HtmlGreeter without a specified and receive a string with h1 tags", () => {
    const result = new HtmlGreeter("Good evening");
    expect(result.greet("Marissa")).toBe(`<h1>Good evening, Marissa!</h1>`);
  });
});

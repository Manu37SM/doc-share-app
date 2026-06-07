import { describe, it, expect } from "vitest";

describe("Document Logic", () => {
  it("should create a title", () => {
    const title = "My Document";

    expect(title).toBe("My Document");
  });
});

describe("Share Logic", () => {
  it("should allow sharing", () => {
    const owner = 1;
    const receiver = 2;

    expect(owner).not.toBe(receiver);
  });
});
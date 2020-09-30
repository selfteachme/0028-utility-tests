import { slugify } from "../slugify";

// describe("Slugify", () => {
//   it("converts a string to a slug", () => {
//     expect("Something").toBe("Something");
//     expect("else").toBe("else");
//   });
// });

test("Slugify converts a string to a slug", () => {
  expect(slugify("Tab 1")).toBe("tab-1");
  expect(slugify("Amy's Tab")).toBe("amys-tab");
  expect(slugify("Amy-Tab")).toBe("amy-tab");
  expect(slugify("Amy! Tab")).toBe("amy-tab");
});

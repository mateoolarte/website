import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

test("HomePage", () => {
  render(<HomePage />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Mateo Olarte Software Engineer",
    }),
  ).toBeDefined();
});

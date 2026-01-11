import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "../../../messages/en.json";

import HomePage from "./page";

test("HomePage", () => {
  render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <HomePage />
    </NextIntlClientProvider>,
  );
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Mateo Olarte Software Engineer",
    }),
  ).toBeDefined();
});

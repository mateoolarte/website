import { expect, test } from "@playwright/test";

test.describe("unauthenticated user", () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test("redirects /admin to /sign-in", async ({ page }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL("/sign-in");
  });

  test("sign-in page renders", async ({ page }) => {
    await page.goto("/sign-in");
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  });

  test("shows error on invalid credentials", async ({ page }) => {
    await page.goto("/sign-in");
    await page.getByLabel("Email").fill("wrong@example.com");
    await page.getByLabel("Password").fill("wrongpassword");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByRole("alert")).toBeVisible();
  });
});

test.describe("authenticated user", () => {
  test("redirects /sign-in to /admin", async ({ page }) => {
    await page.goto("/sign-in");
    await expect(page).toHaveURL("/admin");
  });

  test("can access /admin", async ({ page }) => {
    await page.goto("/admin");
    await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();
  });

  test("sign-out redirects to /sign-in", async ({ page }) => {
    await page.goto("/admin");
    await page.getByRole("button", { name: /sign out/i }).click();
    await expect(page).toHaveURL("/sign-in");
  });
});

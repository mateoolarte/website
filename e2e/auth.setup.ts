import { expect, test as setup } from "@playwright/test";

const authFile = "e2e/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/sign-in");
  await page.getByLabel("Email").fill(process.env.E2E_USER_EMAIL!);
  await page.getByLabel("Password").fill(process.env.E2E_USER_PASSWORD!);
  await page.getByRole("button", { name: "Sign in" }).click();

  await page.waitForURL("/admin");
  await expect(page.getByRole("heading", { name: "Admin" })).toBeVisible();

  await page.context().storageState({ path: authFile });
});

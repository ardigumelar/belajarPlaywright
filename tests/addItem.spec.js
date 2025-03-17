import { test, expect } from "@playwright/test";

// use this if not declared in playwright.config,js file
// test.use({ storageState: "auth.json" });

test("Add Item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const btnCheckout = page.locator("#add-to-cart-sauce-labs-backpack");
  await btnCheckout.click();
});

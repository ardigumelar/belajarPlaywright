import { test, expect } from "@playwright/test";

test("Login End To Finish Checkout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  const btnCheckout = page.locator("#add-to-cart-sauce-labs-bike-light");
  await btnCheckout.click();

  const buttonChart = page.locator("#shopping_cart_container");
  await buttonChart.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  const buttonCheckout = page.locator("#checkout");
  await buttonCheckout.click();

  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-one.html"
  );

  const inputName = page.locator("#first-name");
  await inputName.fill("Coco");
  await expect(inputName).toHaveValue("Coco");

  const inputLastname = page.locator("#last-name");
  await inputLastname.fill("Pilo");
  await expect(inputLastname).toHaveValue("Pilo");

  const inputPostal = page.locator("#postal-code");
  await inputPostal.fill("11321");
  await expect(inputPostal).toHaveValue("11321");

  const buttonContinue = page.locator("#continue");
  await buttonContinue.click();

  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-two.html"
  );

  const buttonFinish = page.locator("#finish");
  await buttonFinish.click();

  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-complete.html"
  );

  // await expect(page.getByAltText("Thank you for your order!")).toBeVisible();
});

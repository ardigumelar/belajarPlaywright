import { test, expect } from "@playwright/test";

test("Login Valid Data", async ({ page }) => {
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

  // Login Auth in file Config
  await page.context().storageState({ path: "auth.json" });
});

// Login Invalid Username
test("Login Invalid Username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("locked_out_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(
    page.getByAltText("Epic sadface: Sorry, this user has been locked out.")
  ).toBeVisible();
});

// Login Invalid Password
test("Login Invalid Password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(
    page.getByAltText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
});

// Login Invalid Username
test("Login Invalid Username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("locked_out_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(
    page.getByAltText("Epic sadface: Sorry, this user has been locked out.")
  ).toBeVisible();
});

// Login Invalid Password
test("Login Invalid Password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");
  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  await expect(
    page.getByAltText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible();
});

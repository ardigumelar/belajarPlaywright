import loginLocator from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class loginActions {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.loginLocator = new loginLocator();

    this.inputUsername = page.locator(this.loginLocator.inputUsername);
    this.inputPassword = page.locator(this.loginLocator.inputPassword);
    this.clickButtonlogin = page.locator(this.loginLocator.buttonLogin);

    this.urlValidate = "https://www.saucedemo.com/inventory.html";
    this.addItemchart = page.locator(this.loginLocator.addItemchart);

    this.clickchartIcon = page.locator(this.loginLocator.clickchartIcon);

    this.clickCheckout = page.locator(this.loginLocator.clickCheckout);

    this.inputNamefirst = page.locator(this.loginLocator.inputNamefirst);
    this.inputNamelast = page.locator(this.loginLocator.inputNamelast);
    this.inputPostcode = page.locator(this.loginLocator.inputPostcode);

    this.clickContinue = page.locator(this.loginLocator.clickContinue);

    this.clickFinish = page.locator(this.loginLocator.clickFinish);
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async inputLogin() {
    await this.inputUsername.fill("standard_user");
    await expect(this.inputUsername).toHaveValue("standard_user");
    await this.inputPassword.fill("secret_sauce");
    await expect(this.inputPassword).toHaveValue("secret_sauce");
    await this.clickButtonlogin.click();
  }

  async gotoChart() {
    await expect(this.page).toHaveURL(this.urlValidate);
  }

  async addItem() {
    await this.addItemchart.click();
  }

  async shopChart() {
    await this.clickchartIcon.click();
  }

  async CheckoutItem() {
    await this.clickCheckout.click();
  }

  async inputCheckout() {
    await this.inputNamefirst.fill("ivan");
    await expect(this.inputNamefirst).toHaveValue("ivan");
    await this.inputNamelast.fill("navi");
    await expect(this.inputNamelast).toHaveValue("navi");
    await this.inputPostcode.fill("11133");
    await expect(this.inputPostcode).toHaveValue("11133");
  }

  async buttonContinue() {
    await this.clickContinue.click();
  }

  async buttonFinish() {
    await this.clickFinish.click();
  }
}

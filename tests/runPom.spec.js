import { test } from "@playwright/test";
import loginActions from "./pom/actions/loginActions";

test("Page test Models", async ({ page }) => {
  const loginObj = new loginActions(page);
  await loginObj.goto();
  await loginObj.inputLogin();
  // await loginObj.gotoChart();
  await loginObj.addItem();
  await loginObj.shopChart();
  await loginObj.CheckoutItem();
  await loginObj.inputCheckout();
  await loginObj.buttonContinue();
  await loginObj.buttonFinish();
});

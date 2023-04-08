import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
  //console.log("Finished loading");
  const currentAmount = await dbank.checkBalance();
  this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});
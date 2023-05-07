import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
  //console.log("Finished loading");
  const currentAmount = await dbank.checkBalance();
  this.document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  }


  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdraw(outputAmount);
  }


  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});
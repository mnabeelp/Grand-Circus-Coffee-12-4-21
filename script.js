let drink;
let price;


function checkout(choice) {
  document.querySelector("#checkout").classList.remove("hidden");
  document.querySelector("#checkout-img").src = `${choice}.jpg`; //look for other concatenation

  // add the conditional below
  if (choice === "latte") {
    drink = "Latte";
    price = 4.29;
  } else if (choice === "cappuccino") {
      drink = "Cappuccino";
      price = 4.79;
  } else if (choice ==="iced-coffee") {
      drink = "Iced Coffee";
      price = 3.79;
  }

  document.querySelector("#selected-drink").innerText = drink;
  document.querySelector("#price").innerText = "$" + price.toFixed(2);
}

function receipt() {
  document.querySelector("#checkout").classList.add("hidden");
  document.querySelector("#receipt").classList.remove("hidden");

  let quantity = parseInt(document.querySelector("#quantity1").value);

  // add quantity and total calculation below!
  let total = price * quantity;

  document.querySelector("#drink").innerText = drink;
  document.querySelector("#total").innerText = "$" + total.toFixed(2);
  document.querySelector("#quantity2").innerText = quantity;
  document.querySelector("#price2").innerText = "$" + price;
}

function restart() {
  document.querySelector("#receipt").classList.add("hidden");
  document.querySelector("#quantity1").value = 0;
}

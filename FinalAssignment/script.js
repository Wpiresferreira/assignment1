const button = document.getElementById("btn-menu");
const nav = document.getElementById("nav");

function toggleMenu() {
  nav.classList.toggle("active");
  if (button.innerText == "X") {
    button.innerText = "☰";
  } else {
    button.innerText = "X";
  }
}
function updateValues() {
  let qtdItem1 = document.getElementById("qtdItem1").value;
  let qtdItem2 = document.getElementById("qtdItem2").value;
  let qtdItem3 = document.getElementById("qtdItem3").value;
  let qtdItem4 = document.getElementById("qtdItem4").value;
  let qtdItem5 = document.getElementById("qtdItem5").value;
  let qtdItem6 = document.getElementById("qtdItem6").value;
  let qtdItem7 = document.getElementById("qtdItem7").value;
  let qtdItem8 = document.getElementById("qtdItem8").value;
  let qtdItem9 = document.getElementById("qtdItem9").value;
  let qtdItem10 = document.getElementById("qtdItem10").value;
  let qtdItem11 = document.getElementById("qtdItem11").value;
  let qtdItem12 = document.getElementById("qtdItem12").value;

  console.log(qtdItem1);

  let priceItem1 = 10;
  let priceItem2 = 0.003;
  let priceItem3 = 0.004;
  let priceItem4 = 0.004;
  let priceItem5 = 0.001;
  let priceItem6 = 0.007;
  let priceItem7 = 0.003;
  let priceItem8 = 5;
  let priceItem9 = 40;
  let priceItem10 = 10;
  let priceItem11 = 10;
  let priceItem12 = 80;

  let subTotalItem1 = document.getElementById("subTotalItem1");
  let subTotalItem2 = document.getElementById("subTotalItem2");
  let subTotalItem3 = document.getElementById("subTotalItem3");
  let subTotalItem4 = document.getElementById("subTotalItem4");
  let subTotalItem5 = document.getElementById("subTotalItem5");
  let subTotalItem6 = document.getElementById("subTotalItem6");
  let subTotalItem7 = document.getElementById("subTotalItem7");
  let subTotalItem8 = document.getElementById("subTotalItem8");
  let subTotalItem9 = document.getElementById("subTotalItem9");
  let subTotalItem10 = document.getElementById("subTotalItem10");
  let subTotalItem11 = document.getElementById("subTotalItem11");
  let subTotalItem12 = document.getElementById("subTotalItem12");
  let total = document.getElementById("total");

  console.log(subTotalItem1);

  subTotalItem1.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem1 * priceItem1);
  subTotalItem2.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem2 * priceItem2);
  subTotalItem3.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem3 * priceItem3);
  subTotalItem4.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem4 * priceItem4);
  subTotalItem5.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem5 * priceItem5);
  subTotalItem6.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem6 * priceItem6);
  subTotalItem7.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem7 * priceItem7);
  subTotalItem8.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem8 * priceItem8);
  subTotalItem9.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem9 * priceItem9);
  subTotalItem10.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem10 * priceItem10);
  subTotalItem11.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem11 * priceItem11);
  subTotalItem12.innerHTML =
    "<b>Subtotal &nbsp</b>" +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    }).format(qtdItem12 * priceItem12);

  total.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(
    qtdItem1 * priceItem1 +
      qtdItem2 * priceItem2 +
      qtdItem3 * priceItem3 +
      qtdItem4 * priceItem4 +
      qtdItem5 * priceItem5 +
      qtdItem6 * priceItem6 +
      qtdItem7 * priceItem7 +
      qtdItem8 * priceItem8 +
      qtdItem9 * priceItem9 +
      qtdItem10 * priceItem10 +
      qtdItem11 * priceItem11 +
      qtdItem12 * priceItem12
  );
  console.log(total);
}

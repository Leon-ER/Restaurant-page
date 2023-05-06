import "./style.css";

export default function menu() {
  const divMenu = document.getElementById("menu");
  const divCenter = document.createElement("div");
  const title1 = document.createElement("h2");
  const table1 = document.createElement("table");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const hr1 = document.createElement("hr");
  const title2 = document.createElement("h2");
  const table2 = document.createElement("table");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const hr2 = document.createElement("hr");
  const title3 = document.createElement("h2");
  const table3 = document.createElement("table");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");
  const hr3 = document.createElement("hr");

  divCenter.classList.add("center");
  divMenu.appendChild(divCenter);
  divCenter.appendChild(title1);
  title1.innerHTML = "Main Dishes";

  divCenter.appendChild(table1);
  table1.appendChild(li1);
  table1.appendChild(li2);
  li1.innerHTML =
    " Foie gras with balsamic reduction and toasted brioche | 100$";
  li2.innerHTML =
    " Duck confit with cherry reduction and crispy fried shallots |125$";

  divCenter.appendChild(hr1);

  divCenter.appendChild(title2);
  title2.innerHTML = "Beverages";
  divCenter.appendChild(table2);
  table2.appendChild(li3);
  table2.appendChild(li4);
  li3.innerHTML =
    " Craft cocktails made with premium spirits and fresh ingredients| 40$";
  li4.innerHTML = "Vintage red wine from a top winery | 400-1505$";

  divCenter.appendChild(hr2);
  divCenter.appendChild(title3);
  title3.innerHTML = "Desserts";
  divCenter.appendChild(table3);
  table3.appendChild(li5);
  table3.appendChild(li6);
  li5.innerHTML =
    "Crème brûlée with fresh berries and a hint of lavender | 25$";
  li6.innerHTML = "Chocolate soufflé with vanilla crème anglaise | 40$";
  divCenter.appendChild(hr3);
}

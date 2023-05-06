// Page boilerplate

import "./style.css";

export default function mainPage() {
  const container = document.getElementById("content");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const buttonHome = document.createElement("button");
  const buttonContact = document.createElement("button");
  const buttonMenu = document.createElement("button");
  const divMain = document.createElement("div");
  const divHome = document.createElement("div");
  const divMenu = document.createElement("div");
  const divContact = document.createElement("div");
  const footer = document.createElement("footer");
  const p = document.createElement("p");

  // header
  container.appendChild(header);
  header.appendChild(nav);

  nav.appendChild(buttonHome);
  buttonHome.setAttribute("data-tab-target", "#home");
  buttonHome.classList.add("home");
  buttonHome.innerHTML = "Home";

  nav.appendChild(buttonMenu);
  buttonMenu.setAttribute("data-tab-target", "#menu");
  buttonMenu.classList.add("menu");
  buttonMenu.innerHTML = "Menu";

  nav.appendChild(buttonContact);
  buttonContact.setAttribute("data-tab-target", "#contact");
  buttonContact.classList.add("contact");
  buttonContact.innerHTML = "Contact";

  // Main
  container.appendChild(divMain);
  divMain.classList.add("main");

  divMain.appendChild(divHome);
  divHome.setAttribute("id", "home");
  divHome.setAttribute("data-tab", "home");

  divMain.appendChild(divMenu);
  divMenu.setAttribute("id", "menu");
  divMenu.setAttribute("data-tab", "menu");

  divMain.appendChild(divContact);
  divContact.setAttribute("id", "contact");
  divContact.setAttribute("data-tab", "contact");

  //   footer
  container.appendChild(footer);
  footer.appendChild(p);
  p.innerHTML = "Mabe by Leon";

}

import pageLoad from "../src/pageLoad";
import home from "../src/home";
import menu from "../src/menu";
import contact from "../src/contact";

// pageLoad();
pageLoad();
populateTabs();

// tab switching
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    target.classList.add("active");
  });
});

// populate tabs
function populateTabs() {
  const homeDiv = document.getElementById("home");
  const menuDiv = document.getElementById("menu");
  const contactDiv = document.getElementById("contact");

  homeDiv.classList.add("active");
  homeDiv.append(home());
  menuDiv.append(menu());
  contactDiv.append(contact());
}

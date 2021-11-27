import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./styles.css";

let mainPage = document.querySelector("#content");
let btnNav = document.createElement("div");
let homeBtn = document.createElement("button");
let menuBtn = document.createElement("button");
let contactBtn = document.createElement("button");

btnNav.setAttribute("id", "nav");
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact";

btnNav.appendChild(homeBtn);
btnNav.appendChild(menuBtn);
btnNav.appendChild(contactBtn);
mainPage.appendChild(btnNav);

homeBtn.addEventListener("click", loadPage);
menuBtn.addEventListener("click", loadPage);
contactBtn.addEventListener("click", loadPage);

function loadPage(e) {
  let tabContent = document.querySelector("#tab-content");
  tabContent.remove();
  let name = e.target.textContent;
  if (name === "Home") home();
  else if (name === "Menu") menu();
  else contact();
}

home();

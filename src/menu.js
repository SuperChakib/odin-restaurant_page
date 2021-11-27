function menu() {
  let mainPage = document.querySelector("#content");
  let tabContent = document.createElement("div");
  let title = document.createElement("h1");
  let mainImg = document.createElement("img");
  let review = document.createElement("div");

  tabContent.setAttribute("id", "tab-content");
  title.textContent = "My Menu";
  mainImg.src =
    "https://cac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcac.2F2021.2F03.2F01.2F59e0d584-adde-4173-a4b1-5979300c855a.2Ejpeg/748x372/quality/90/crop-from/center/tian-de-ratatouille.jpeg";
  review.textContent = "Enjoy this delicious and healthy French delicacy!";

  tabContent.appendChild(title);
  tabContent.appendChild(mainImg);
  tabContent.appendChild(review);
  mainPage.appendChild(tabContent);
}

export default menu;

function init() {
  let mainPage = document.querySelector("#content");
  let tabContent = document.createElement("div");
  let title = document.createElement("h1");
  let mainImg = document.createElement("img");
  let review = document.createElement("div");

  tabContent.setAttribute("id", "tab-content");
  title.textContent = "My Restaurant";
  mainImg.src =
    "https://www.sortiraparis.com/images/1001/91874/582754-photos-le-cafe-de-l-homme.jpg";
  review.textContent = "This restaurant is amazing OMG!";

  tabContent.appendChild(title);
  tabContent.appendChild(mainImg);
  tabContent.appendChild(review);
  mainPage.appendChild(tabContent);
}

export default init;

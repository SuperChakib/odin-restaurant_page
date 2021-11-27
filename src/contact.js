function contact() {
  let mainPage = document.querySelector("#content");
  let tabContent = document.createElement("div");
  let title = document.createElement("h1");
  let mainImg = document.createElement("img");
  let contact1 = document.createElement("div");

  tabContent.setAttribute("id", "tab-content");
  title.textContent = "Contact Us";
  mainImg.src =
    "https://www.connexionfrance.com/var/connexion/storage/images/_aliases/articleimage/media/images/bear-with-three-cubs/1392965-1-eng-GB/Bear-with-three-cubs.jpg";
  contact1.textContent = "Mama Bear: 555-555-5554";

  tabContent.appendChild(title);
  tabContent.appendChild(mainImg);
  tabContent.appendChild(contact1);
  mainPage.appendChild(tabContent);
}

export default contact;

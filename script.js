document.getElementById("logout").addEventListener("click", logoutclick);

function logoutclick() {
  location.href = "login.html";
}

document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var wishListContainer = document.querySelector("#wish_container");
  // Change wishlist title if the wishlist was empty
  if (wishListContainer.children.length === 0) {
    document.querySelector("#title").innerHTML = "My WishList";
  }
  let des1 = document.querySelector("#dest").innerText;
  let loc = document.querySelector("#loc").innerText;
  let pho = document.querySelector("#pho").innerText;
  let desc = document.querySelector("#desc").value;
  let card_div = createCard(des1, loc, pho, desc);
  document.querySelector("#wish_container").append(card_div);
  event.target.elements[0].value = "";
  event.target.elements[1].value = "";
  event.target.elements[2].value = "";
  event.target.elements[3].value = "";
}

function createCard(des1, lo, ph, des2) {
  // let card = document.createElement("div");
  // card.className = "card";
  // let title = document.createElement("h5");
  // title.innerText = des1;
  // title.setAttribute("class", "card-title");
  // card.appendChild(title);
  // document.querySelector("#card_container").append(card);

  let desc = des2;
  let loc = lo;
  let pho = ph;
  let dest = des1;

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  let head5 = document.createElement("h5");
  let para = document.createElement("p");
  let para2 = document.createElement("p");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  var buttonsContainer = document.createElement("div");
  para.textContent = desc;
  para2.textContent = loc;
  head5.textContent = dest;
  img.src = pho;

  if (pho.length === 0 || !pho.includes("http")) {
    img.src =
      "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
  }

  div1.setAttribute("class", "card");
  div2.setAttribute("class", "class-body");
  head5.setAttribute("class", "card-title");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", dest);
  para.setAttribute("class", "card-text");
  para2.setAttribute("class", "card-text");

  div1.style.width = "15rem";
  div1.style.height = "fit-content";
  div1.style.margin = "20px";
  button1.textContent = "Edit";
  button1.style.backgroundColor = "yellow";
  button2.addEventListener("click", removeDestination);
  button1.addEventListener("click", edit);

  button2.textContent = "Remove";
  button2.style.backgroundColor = "pink";
  buttonsContainer.setAttribute("class", "buttons_container");

  div2.appendChild(head5);
  div2.appendChild(para2);
  div2.appendChild(para);
  buttonsContainer.appendChild(button1);
  buttonsContainer.appendChild(button2);
  div2.appendChild(buttonsContainer);

  div1.appendChild(img);
  div1.appendChild(div2);
  return div1;
  document.querySelector("#card_container").append(div1);
}

function edit(event) {
  var cardBody = event.target.parentElement.parentElement;
  var title = cardBody.children[0];
  var subTitle = cardBody.children[1];
  var loc = cardBody.children[2];
  var card = cardBody.parentElement;
  var photoUrl = card.children[0];

  var newTitle = window.prompt("Enter new name");
  var newSubtitle = window.prompt("Enter new location");
  var newPhotoUrl = window.prompt("Enter new photo url");
  var newdesc = window.prompt("Enter new description");
  if (newTitle.length > 0) {
    title.innerText = newTitle;
  }

  if (newSubtitle.length > 0) {
    subTitle.innerText = newSubtitle;
  }

  if (newPhotoUrl.length > 0) {
    photoUrl.setAttribute("src", newPhotoUrl);
  }

  if (newdesc.length > 0) {
    loc.innerText = newdesc;
  }
}

function removeDestination(event) {
  var cardBody = event.target.parentElement.parentElement;
  var card = cardBody.parentElement;
  card.remove();
}

const clickButton = (e) => {
  let searchKeyword = e.target.innerHTML;
  let sUrl = "https://www.omdbapi.com/?&apikey=a92d1656&s=";
  let searchUrl = sUrl.concat(searchKeyword);

  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => processData(data.Search));
};

document.getElementById("submit_btn").addEventListener("click", (e) => {
  e.preventDefault();

  let searchKeyword = document.getElementById("search").value;

  let btn = document.createElement("button");

  btn.innerHTML = searchKeyword;

  document.getElementById("search").value = "";

  document.getElementById("search_btn_container").appendChild(btn);

  btn.addEventListener("click", clickButton);
});
function processData(movieList) {
  //console.log(movieList);
  movieList.forEach((element) => {
    console.log(element);
    let div1 = createCard(
      element.Title,
      element.Year,
      element.Poster,
      element.Type
    );
    document.querySelector("#card_container").append(div1);
  });
}

// function clickButton(e) {
//   let searchKeyword = e.innerHTML;
//   let sUrl = "http://www.omdbapi.com/?&apikey=a92d1656&s=";
//   let searchUrl = sUrl.concat(searchKeyword);

//   fetch(searchUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data.Search));
// }

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
  createCard();
  event.target.elements[0].value = "";
  event.target.elements[1].value = "";
  event.target.elements[2].value = "";
  event.target.elements[3].value = "";
}

function createCard() {
  let dest = document.getElementById("dest").value;
  let loc = document.getElementById("loc").value;
  let pho = document.getElementById("pho").value;
  let desc = document.getElementById("desc").value;
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
  // button1.style.paddingBottom = "1rem";
  // button1.style.marginLeft = "22rem";
  // button1.style.paddingBottom = "1rem";
  // button1.style.marginLeft = "2rem";
  div2.appendChild(head5);
  div2.appendChild(para2);
  div2.appendChild(para);
  buttonsContainer.appendChild(button1);
  buttonsContainer.appendChild(button2);
  div2.appendChild(buttonsContainer);

  div1.appendChild(img);
  div1.appendChild(div2);

  document.querySelector("#wish_container").appendChild(div1);
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

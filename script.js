const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-walth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//  Fetch random user and add money
// function getRandomUser() {
// fetch("https://randomuser.me/api").then((res) => res.json()).then(data =>);
// }

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    // money: Math.floor(Math.round() * 1000000),
    city: `${user.location.city}`,
  };

  addData(newUser);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}
// update DOM
function updateDOM(providedData = data) {
  //  Clear the main div
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong>${item.city}`;
    main.appendChild(element);
  });
}

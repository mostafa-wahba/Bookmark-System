let nameInput = document.getElementById("siteName");
let urlInput = document.getElementById("siteUrl");
let siteList = [];
if (localStorage.getItem("siteObj") != null) {
  siteList = JSON.parse(localStorage.getItem("siteObj"));
  displayData();
}
function addingData() {
  if (nameInput.value == "" || urlInput.value == "") {
    document.getElementById("nameError").style.display = "block";
    document.getElementById("urlError").style.display = "block";
  } else {
    let siteObj = {
      name: nameInput.value,
      url: urlInput.value,
    };
    siteList.push(siteObj);
    localStorage.setItem("siteObj", JSON.stringify(siteList));
    displayData();
    clearForm();
  }
}
function displayData() {
  let element = ``;
  for (let index = 0; index < siteList.length; index++) {
    element += `<div class="row content" id"${siteList[index].name}">
    <h2 class="col-4">${siteList[index].name}</h2>
    <a class="col-1 btn btn-primary" href="https:\//${siteList[index].url}" target="_blank">Visit</a>
    <button class="col-1 btn btn-danger" onclick="deleteData(${index})">Delete</button>
    </div>`;
  }
  document.getElementById("bookingList").innerHTML = element;
}
function deleteData(i) {
  siteList.splice(i, 1);
  localStorage.setItem("siteObj", JSON.stringify(siteList));
  displayData();
}
function clearForm() {
  nameInput.value = "";
  urlInput.value = "";
  document.getElementById("nameError").style.display = "none";
  document.getElementById("urlError").style.display = "none";
}

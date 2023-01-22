document
  .getElementById("add-div-button")
  .addEventListener("click", function () {
    var newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
  });

newDiv.innerHTML = "Hello World";
newDiv.setAttribute("class", "new-div");

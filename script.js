fetch("https://prismpickerapi.pythonanywhere.com/tailwind/random")
  .then((response) => response.json())
  .then((data) => {
    document.body.style.color = data["500"];
    document.body.style.backgroundColor = data["200"];
    const preElements = document.querySelectorAll("pre");
    preElements.forEach((pre) => {
      pre.style.backgroundColor = data["300"];
      pre.style.boxShadow = "2px 2px 4px " + data["400"];
    });
    document.querySelector("button").style.backgroundColor = data["300"];
    document.querySelector("button").style.color = data["600"];
    document.querySelector("button").style.border = "2px solid";
    document.querySelector("button").style.borderColor = data["500"];
    document.querySelector("button").style.boxShadow =
      "4px 4px 6px " + data["700"];
    const style = document.createElement("style");
    style.innerHTML = "::selection { background-color: " + data["300"] + "; }";
    document.head.appendChild(style);
    document.querySelector("button").addEventListener("mouseover", function () {
      this.style.backgroundColor = data["600"];
      this.style.color = data["300"];
      this.style.borderColor = data["500"];
    });

    document.querySelector("button").addEventListener("mouseout", function () {
      this.style.backgroundColor = data["300"];
      this.style.color = data["600"];
      this.style.borderColor = data["500"];
    });
    document
      .querySelector("#github")
      .addEventListener("mouseover", function () {
        this.style.color = data["700"];
      });
    document.querySelector("#github").addEventListener("mouseout", function () {
      this.style.color = data["600"];
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });

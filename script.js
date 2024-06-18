fetch("https://prismpickerapi.pythonanywhere.com/tailwind/random")
  .then((response) => response.json())
  .then((data) => {
    document.body.style.color = data["500"];
    document.body.style.backgroundColor = data["200"];
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", data["200"]);
    const style = document.createElement("style");
    style.innerHTML = `*::-webkit-scrollbar {
  width: 0.4rem;
}

*::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: ${data["400"]};
}

*::-webkit-scrollbar-track,
*::-webkit-scrollbar-button {
  background: transparent;
}
  *:selection {
    background-color: ${data["400"]};
    color: ${data["200"]};
    }`;
    const imgElements = document.querySelectorAll("img");
    imgElements.forEach((img) => {
      img.style.boxShadow = "4px 4px 6px " + data["700"];
    });
    const preElements = document.querySelectorAll("pre");
    preElements.forEach((pre) => {
      pre.style.backgroundColor = data["300"];
      pre.style.boxShadow = "2px 2px 4px " + data["400"];
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

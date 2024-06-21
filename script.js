// Fetch a random Tailwind CSS color palette from the Prism Picker API
fetch("https://prismpickerapi.pythonanywhere.com/tailwind/random")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Use the parsed JSON data
    // Create a new <style> element
    const style = document.createElement("style");

    // Set the body's text color using the '700' shade from the palette
    document.body.style.color = data["700"];
    // Set the body's background color using the '200' shade from the palette
    document.body.style.backgroundColor = data["200"];

    // Set the meta theme-color to match the body's background color
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", data["200"]);

    // Define custom CSS rules for scrollbars and text selection
    style.innerHTML = `
      *::-webkit-scrollbar { width: 0.4rem; } // Set scrollbar width
      *::-webkit-scrollbar-thumb { border-radius: 1rem; background: ${data["400"]}; } // Style scrollbar thumb
      *::-webkit-scrollbar-track, *::-webkit-scrollbar-button { background: transparent; } // Style scrollbar track and buttons
      *::selection { background: ${data["400"]}; color: ${data["200"]}; } // Style text selection
    `;

    // Append the <style> element to the <head> of the document
    document.head.appendChild(style);

    // Apply a box shadow to all <img> elements using the '700' shade
    document
      .querySelectorAll("img")
      .forEach((img) => (img.style.boxShadow = `4px 4px 6px ${data["700"]}`));

    // Style all <pre> elements with background color and box shadow
    document.querySelectorAll("pre").forEach((pre) => {
      pre.style.backgroundColor = data["300"]; // Set background color
      pre.style.boxShadow = `2px 2px 4px ${data["400"]}`; // Set box shadow
    });

    // Get the element with ID 'github'
    const github = document.querySelector("#github");
    // Get the element with ID 'roll'
    const roll = document.querySelector("#roll");

    // Add mouseover and mouseout event listeners to the 'github' element
    github.addEventListener(
      "mouseover",
      () => (github.style.color = data["800"]) // Change color on mouseover
    );
    github.addEventListener(
      "mouseout",
      () => (github.style.color = data["700"]) // Revert color on mouseout
    );

    // Add mouseover and mouseout event listeners to the 'roll' element
    roll.addEventListener("mouseover", () => (roll.style.color = data["800"])); // Change color on mouseover
    roll.addEventListener("mouseout", () => (roll.style.color = data["700"])); // Revert color on mouseout

    // Set the initial color of the 'roll' element
    roll.style.color = data["700"];
  })
  .catch(console.error); // Log any errors that occur during the fetch or processing

// Add a click event listener to the 'roll' element to reload the page
document
  .querySelector("#roll")
  .addEventListener("click", () => location.reload());

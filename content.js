// Function to create the toggle button
function createToggleButton(input) {
  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.innerText = "show";
  toggleButton.style.display = "flex";
  toggleButton.style.alignItems = "center";
  toggleButton.style.justifyContent = "center";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.margin = "8px 12px";
  toggleButton.style.padding = "4px 8px";
  toggleButton.style.fontSize = "12px";
  toggleButton.style.lineHeight = "16px";

  // Add toggle functionality
  toggleButton.addEventListener("click", function () {
    if (input.type === "password") {
      input.type = "text";
      toggleButton.innerText = "hide";
    } else {
      input.type = "password";
      toggleButton.innerText = "show";
    }
  });

  return toggleButton;
}

// Function to find all password fields and add toggle buttons
function addToggleButtons() {
  const passwordInputs = document.querySelectorAll('input[type="password"]');

  passwordInputs.forEach((input) => {
    // Ensure no button is added multiple times
    if (!input.nextSibling || input.nextSibling.tagName !== "BUTTON") {
      const toggleButton = createToggleButton(input);
      input.parentNode.insertBefore(toggleButton, input.nextSibling);
    }
  });
}

// Run the function when the content script is loaded
addToggleButtons();

// Run again if any DOM changes are detected (useful for dynamically loaded forms)
const observer = new MutationObserver(addToggleButtons);
observer.observe(document.body, { childList: true, subtree: true });

const signInForm = document.querySelector(".sign-in-form");
const terminal = document.querySelector(".terminals");

signInForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username")?.value.trim();

  if (terminal) {
    terminal.innerHTML = `
      <p>> Sign-in attempt received</p>
      <p>> User: ${username || "guest"}</p>
      <p>> Authentication is currently disabled.</p>
    `;
  }
});


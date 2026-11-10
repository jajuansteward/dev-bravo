const session = JSON.parse(sessionStorage.getItem("session")); // JSON string -> JS object

if (!session || !session.authenticated) {
  window.location.href = "signin.html";
} else {
  document.querySelector("#welcome").textContent =
    "welcome, " + session.username + " (" + session.role + ")";

  if (session.role === "admin") {
    document.querySelector("#admin-link").hidden = false;
  }

  document.querySelector("#signout-btn").addEventListener("click", function () {
    sessionStorage.removeItem("session");
    window.location.href = "private.html";
  });
}
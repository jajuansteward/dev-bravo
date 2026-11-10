const session = JSON.parse(sessionStorage.getItem("session")); 

if (!session || !session.authenticated) {
  window.location.href = "signin.html";
} else if (session.role !== "admin") {
  window.location.href = "private.html";
} else {
  document.querySelector("#admin-content").hidden = false;
  document.querySelector("#signout-btn").addEventListener("click", function () {
    sessionStorage.removeItem("session");
    window.location.href = "signin.html";
  });
  showAdmin();
}

async function showAdmin() {
  let appState = JSON.parse(sessionStorage.getItem("appState")); 

  if (!appState) {
    const response = await fetch("../assets/data/restaurant.json");
    appState = {
      app: { name: "Restaurant Finder", version: "0.1" },
      user: session,
      data: await response.json(),
      session: { started: new Date().toISOString() },
    };
    sessionStorage.setItem("appState", JSON.stringify(appState)); 
  }

  document.querySelector("#user-info").textContent =
    "User: " + session.username +
    " | Role: " + session.role +
    " | Authenticated: " + session.authenticated;

  const list = document.querySelector("#record-list");
  list.innerHTML = "";
  document.querySelector("#record-count").textContent =
    appState.data.length + " records";

  appState.data.forEach(function (sock) {
    const li = document.createElement("li");
    li.textContent = restaurant.title + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", function () {
      appState.data = appState.data.filter(function (s) {
        return r.id !== restaurant.id;
      });
      sessionStorage.setItem("appState", JSON.stringify(appState)); 
      showAdmin(); 
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  const keys = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    keys.push(sessionStorage.key(i));
  }
  document.querySelector("#storage-keys").textContent = keys.join(", ");

  document.querySelector("#app-state-output").textContent = JSON.stringify(
    appState,
    null,
    2,
  );

  document.querySelector("#debug-info").textContent =
    "Now: " + new Date().toLocaleString() + "\n" +
    "Page: " + window.location.href + "\n" +
    "Browser: " + navigator.userAgent + "\n" +
    "Session started: " + appState.session.started;
}
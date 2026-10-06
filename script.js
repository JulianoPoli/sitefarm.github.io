const screens = {
  home: document.getElementById("home"),
  pricing: document.getElementById("pricing")
};
const pageNumber = document.getElementById("pageNumber");

function goTo(target) {
  if (!screens[target]) return;
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("is-active", key === target));
  pageNumber.textContent = target === "home" ? "01" : "02";
  history.replaceState(null, "", target === "home" ? "#home" : "#pricing");
}

document.querySelectorAll("[data-go]").forEach((el) => {
  el.addEventListener("click", () => goTo(el.dataset.go));
});

window.addEventListener("popstate", () => {
  goTo(location.hash === "#pricing" ? "pricing" : "home");
});

goTo(location.hash === "#pricing" ? "pricing" : "home");

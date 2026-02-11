const btn = document.getElementById("filter-btn");
const list = document.getElementById("filter-list");

btn.addEventListener("click", () => {
  list.classList.toggle("hidden");
});
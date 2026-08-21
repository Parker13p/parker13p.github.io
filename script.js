let count = 0;

function addToCart() {
  count++;
  document.getElementById("count").textContent = count;
  document.getElementById("empty").hidden = true;
  document.getElementById("added").hidden = false;
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("open");
}

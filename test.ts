let isLiked = false;

function like() {
  const button = document.getElementById("btn-like");
  const icon = button?.children[0];

  if (!icon) return;

  // Remove o coração preenchido e adiciona o coração vazio
  if (isLiked) {
    icon.classList.remove("fa-heart");
    icon.classList.remove("liked");
    icon.classList.add("fa-heart-o");
  } else {
    // Remove o coração vazio e adiciona o coração preenchido
    icon.classList.remove("fa-heart-o");
    icon.classList.add("fa-heart");
    icon.classList.add("liked");
  }

  isLiked = !isLiked; // Inverte o valor de `isLiked`
}

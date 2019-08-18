const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

// when i click toggle tag, toggle a class of open on the main tag
// and if its open, make the toggle class say closed
// and if its shut, make the toggle tag say open
toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="assets/close.svg"> Close`
  } else {
      toggleTag.innerHTML = `<img src="assets/menu.svg"> Menu`
  }
});

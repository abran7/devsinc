const searchInput = document.getElementById("search_input");

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    alert(e.target.value);
  }
});

function buttonClick() {
  const searchInput = document.getElementById("search_input");
  alert(searchInput.value);
}

function redirecttogmail() {
  location.href = "https://www.google.com/gmail/";
}

function redirecttoimages() {
  location.href = "https://www.google.com.pk/imghp?hl=en&authuser=0&ogbl";
}

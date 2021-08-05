const searchInput = document.getElementById("search_input");
const link = "https://www.google.com/search?q=";

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    location.href = link + e.target.value;
    //alert(e.target.value);
  }
});

function buttonClick() {
  const searchInput = document.getElementById("search_input");
  location.href = link + searchInput.value;
  // alert(searchInput.value);
}

function redirecttogmail() {
  location.href = "https://www.google.com/gmail/";
}

function redirecttoimages() {
  location.href = "https://www.google.com.pk/imghp?hl=en&authuser=0&ogbl";
}

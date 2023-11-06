const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchInput1 = document.getElementById("search-input1");
const cardContainer = document.getElementById("card-container");
const pagination = document.getElementById("pagination");
const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");

const today = new Date().toISOString().split("T")[0]; //to extract current date in YYYY-MM-DD 
//console.log(new Date());
searchInput1.setAttribute("max", today);
searchInput.setAttribute("max", today);

let currentPage = 1;
const itemsPerPage = 3; //limiting number of cards to display
pagination.style.display = "none"; //to hide previous and next buttons
// event listeners for the Buttons
searchButton.addEventListener("click", () => {
  currentPage = 1;
  fetchResults(currentPage);
  pagination.style.display = "block";
});

prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchResults(currentPage);
  }
});

nextPageButton.addEventListener("click", () => {
  currentPage++;
  fetchResults(currentPage);
});

async function fetchResults(page) {  //query parameter for different search queries
  
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${searchInput.value}&end_date=${searchInput1.value}`;
  console.log(searchInput.value);
  console.log(searchInput1.value);
  await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayResults(data, page);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
function displayResults(data, currentPage){}
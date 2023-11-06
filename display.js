const searchInput = document.getElementById("search-input");
const searchInput1 = document.getElementById("search-input1");

export function dateHandler() {
  const today = new Date().toISOString().split("T")[0]; //to extract current date in YYYY-MM-DD 
  searchInput1.setAttribute("max", today);
  searchInput.setAttribute("max", today);
}

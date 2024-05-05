const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "rWkoDHNSFCjjihX1siL_-Nhy7V6sbzBEwFKU5HM8-K0";
// access key:
//rWkoDHNSFCjjihX1siL_-Nhy7V6sbzBEwFKU5HM8-K0
//https://api.unsplash.com/search/photos?page=1&query=office
//https://api.unsplash.com/search/photos?page=1&query=office&client_id=rWkoDHNSFCjjihX1siL_-Nhy7V6sbzBEwFKU5HM8-K0

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

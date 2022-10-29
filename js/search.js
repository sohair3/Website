let dataResponse = document.querySelector(".returnData");
let searchText = document.querySelector(".search");
let searchLetter = document.querySelector(".searchletter");

searchText.addEventListener("click", (e) => {
  search(e.target.value);
});
searchLetter.addEventListener("change", (e)=>{
    searchByLetter(e.target.value.charAt(0));
});
function search(Word) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${Word}`,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      response = JSON.parse(this.responseText).meals;

      // console.log(typeof response);
      //    console.log(response);
      //    console.log(response[0].strMealThumb);

      for (let i = 0; i < response.length; i++) {
        if (
          response[i].strMeal.toLowerCase().includes(Word.toLowerCase()) == true
        ) {
          Display();
        }
      }
    }
  };
  xhr.send();
}
function Display() {
  let cartona = ``;
  for (let i = 0; i <= response.length; i++) {
    console.log(response[i]?.strMealThumb);
    console.log(response[i]?.strMeal);
    cartona += `
        <div class="col-md-3 over-img  position-relative  mx-1 my-1">
        <img  src="${response[i]?.strMealThumb}" alt="img1" width="284" height="300"  >
        <div class="overlay overflow-hidden">
        <h3 class="lead text-muted  fs-3 top-50 fw-bolder text-center my-5">${response[i]?.strMeal}</h3>
        </div>

        </div>
       `;
  }
  dataResponse.innerHTML = cartona;
}

function searchByLetter(l) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${l}
    `,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      response = JSON.parse(this.responseText).meals;
      for (let i = 0; i < response.length; i++) {
        if (
          response[i].strMeal.charAt(0).toLowerCase().includes(l.toLowerCase()) == true
        ) {
          Display();
          //console.log(response[i].strMeal.charAt(0))
        }
      }
      
    }
  };
  xhr.send();
}

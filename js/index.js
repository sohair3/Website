let categorieItem = document.querySelector(".fa-times");
let sideCategorie = document.querySelector(".first-item");
let categorieIcon =document.querySelector('.category i');
let dataRes = document.querySelector('.datares');
// let searchText = document.querySelector('.searchText');
// let searchLetter = document.querySelector('.searchletter');



let response;


categorieItem.addEventListener("click", function () {

  sideCategorie.classList.toggle("hidden");
  if(!sideCategorie.classList.contains('hidden'))
  {
    categorieIcon.classList.add('fa-times');
  }
  else{
    categorieIcon.classList.remove('fa-times');
  }

});


(function fetchData(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://www.themealdb.com/api/json/v1/1/categories.php',true);
    xhr.onload = function(){
        if(this.status === 200)
        {
           response =JSON.parse(this.responseText).categories; 
        //    console.log(typeof response);
        //    console.log(response);
        //    console.log(response[0].strCategoryThumb);
           DisplayData();
        }
    }
    xhr.send();
})();

function DisplayData(){
    let cartona =``;
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i]);
        cartona += `
        <div class="col-md-3 over-img  position-relative  my-3">
        <img  src="${response[i].strCategoryThumb}" alt="img1" width="250" >
        <div class="overlay overflow-hidden">
        <h3 class="lead text-muted fw-bolder text-center my-2">${response[i].strCategory}</h3>
        <p class="lead text-center fs-5 text-muted">${response[i].strCategoryDescription}</p>

        </div>

        </div>
        `;
        
    }
    dataRes.innerHTML = cartona;
};













let areaData = document.querySelector(".area");
let resultData = document.querySelector(".resultData");


(function Area() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list
      `,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let cartona = ``;
      response = JSON.parse(this.responseText).meals;

      // console.log(typeof response);
      //    console.log(response);
      //    console.log(response[0].strMealThumb);
      //console.log(response[0].strArea);
      //console.log((FilterByArea(`${response[0].strArea}`)));
      for (let i = 0; i < response.length; i++) {
        cartona += `
          <div class="col-md-6 col-lg-3 ">
        <div class="movie position-relative ">
          
            <div class="my-3" onclick="(FilterByArea(${response[i].strArea}))}" >
                <i class="fa fa-city fa-3x"></i>
                <h2 class="text-muted mx-auto fs-4 cityName my-4">${
                  response[i].strArea
                }</h2>
              </div>
          
        </div>
      </div>

          `;
      }
      areaData.innerHTML = cartona;
    }
  };
  xhr.send();
})();

function FilterByArea(area) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
      `,
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let cartona = ``;
      response = JSON.parse(this.responseText).meals;

      cartona +=
      `
      `;  

    }
  };
  xhr.send();
  window.location.replace('area-data.html');
}


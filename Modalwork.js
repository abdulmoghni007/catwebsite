const saveButton = document.querySelector(".save-changes-button");

saveButton.addEventListener("click", function() {
    //   const modal = document.querySelector(".modal");
    // var catModal = new bootstrap.Modal(document.getElementById("myModal"));
    const catName = document.querySelector(".cat-name").value;
    const catBreed = document.querySelector(".cat-breed").value;
    const catColor = document.querySelector(".cat_color").value;
    const catUrl = document.querySelector(".cat_img").value;

    var catList = document.querySelector(".cat-items");
    console.log(catName);
    console.log(catBreed);
    console.log(catColor);
    console.log(catUrl);


    if (catName && catColor && catUrl && catBreed) {
        catList.innerHTML += `  <div class="col-8 col-lg-3 " style="height:300px;box-shadow:5px 4px 3px rgb(230, 228, 228); border-radius:10px;background-color:aquamarine; ">
                    <h3 >Name : ${catName} </h3>
                    <h3>Color : ${catBreed} </h3>
                    <h3>Breed : ${catColor} </h3>
                    <img src="${catUrl} " alt="catImage " style="height:150px;width:100%;border-radius:50% ">
                  </div>`;  
    }
});
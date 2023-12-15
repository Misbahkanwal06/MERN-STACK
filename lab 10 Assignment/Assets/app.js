// For Lab 10 assignment, you need to enhance the product rendering from Lab 9 by adding a button to each product card.
//  Clicking this button should take you to a product detail page where you will display detailed information about the selected product. 
// Additionally, you need to display the categories above the product cards, 
// utilizing data from a Dummy JSON API that returns categories



let products;
let url = "https://dummyjson.com/products";
// let url = "https://dummyjson.com/products/search?q=phone";

// first function
function GetDataFrom_Url() {

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw console.error("Something Went Wrong");
            }
            return response.json()
        })

}

// second function
GetDataFrom_Url(url)
    .then((data) => {
        products = data.products;
        appendCardsFunc();
    })
    .catch((error) => {
        console.log(error);
    });



// Third Function

function appendCardsFunc() {
    for (let i = 0; i <= products.length; i++) {
        const pro = products[i];
        const appendCards = ` 
<div class= "col-md-4 mb-5">
<h1 class = " text-center">${pro.category}</h1>

  <div class="card" style="width:100%; height:400px ">
  <img width="100%" height="110px" src="${pro.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body " >
    <h5 class="card-title border  " style="width:100%; height:48px ">${pro.title}</h5>
    <p class="card-text text-secondary fs-5" style="width: 100%; height:140px " >${pro.description}</p>
    <button id="specific" > <a href="proDetail.html" class="btn btn-primary text-dark fs-5">View Details</a> </button>
  </div>
</div> 
</div>
`

        let cardContainer = document.getElementById('ProductContainer');
        // console.log(cardContainer);
        cardContainer.innerHTML += appendCards;
        console.log(cardContainer);


        
       
    }



}






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
  <div class="card" style="width:100%; height:400px ">
  <img width="100%" height="110px" src="${pro.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body " >
    <h5 class="card-title border  " style="width:100%; height:48px ">${pro.title}</h5>
    <p class="card-text text-secondary fs-5" style="width: 100%; height:140px " >${pro.description}</p>
    <a href="./singleProduct.html" class="btn btn-primary text-dark fs-5">Buy Now</a>
  </div>
</div> 
</div>
`

        let cardContainer = document.getElementById('ProductContainer');
        cardContainer.innerHTML += appendCards;
    }
}



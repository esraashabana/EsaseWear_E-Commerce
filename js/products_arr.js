let products = [
  {
    product_id: 1,
    product_name: "t-shirt",
    product_img: "../images/products2/f1.jpg",
    product_img1: "../images/products2/f2.jpg",
    product_img2: "../images/products2/f3.jpg",
    product_img3: "../images/products2/f4.jpg",
    description: "T-shirt in soft cotton jersey. Regular Fit.",
    price: 150,
    count: 20,
    seller: 1,
    category: "topwear",
  },
  {
    product_id: 2,
    product_name: "shirt",
    product_img: "../images/products2/n1.jpg",
    product_img1: "../images/products2/n2.jpg",
    product_img2: "../images/products2/n3.jpg",
    product_img3: "../images/products2/n5.jpg",
    description: "shirt in soft cotton jersey. Regular Fit.",
    price: 300,
    count: 25,
    seller: 1,
    category: "topwear",
  },
  {
    product_id: 3,
    product_name: "long  Shirt",
    product_img: "../images/p/p13.jpg",
    product_img1: "../images/p/p14.jpg",
    product_img2: "../images/p/p11.jpg",
    product_img3: "../images/p/p12.jpg",
    description: `Regular Fit Long Sleeve Oxford Men's Shirt
      Button collar
      Oxford fabric
      One chest pocket`,
    price: 600,
    category: "featured",
    count: 30,
    seller: 1,
    category: "topwear",
  },
  {
    product_id: 4,
    product_name: "Men's Coat",
    product_img: "../images/products2/LC_j.jpg",
    product_img1: "../images/p/p21.jpg",
    product_img2: "../images/p/p22.jpg",
    product_img3: "../images/p/p23.jpg",
    description: ` Slim Fit Biker Collar Men's Coat With a stylish and modern style, the men's coat fits the body with its slim fit cut. The biker collar and the coat, which stands out with its energy, combines classic and sporty elegance.`,
    category: "jacket",
    price: 500,
    count: 31,
    seller: 2,
  },
  {
    product_id: 5,
    product_name: "flower pant",
    product_img: "../images/products2/f7.jpg",
    description: "wonderful flower pant",
    price: 150,
    count: 28,
    seller: 2,
    category: "bottomwear",
  },
  {
    product_id: 6,
    product_name: "Sweatpants",
    product_img: "../images/p/p41.jpg",
    product_img1: "../images/p/p42.jpg",
    description: `Slim Fit Men's Jogger Sweatpants 
      Zipper pocket
      Waist with elastic and adjustable drawstring`,
    category: "populer",
    count: 31,
    seller: 2,
    price: 500,
    category: "bottomwear",
  },

  {
    product_id: 7,
    product_name: "Long Shirt",
    product_img: "../images/p/p61.jpg",
    product_img1: "../images/p/p62.jpg",
    product_img2: "../images/p/p63.jpg",
    product_img3: "../images/p/p64.jpg",
    description: `Shirt Collar Straight Long Sleeve Women's Tunic
        wonderful flower pant`,
    category: "populer",
    price:900,
    count: 25,
    seller: 1,
    category: "topwear",
  },
  {
    product_id: 8,
    product_name: "half-Boot",
    product_img: "images/products/p1.png",
    description: "wonderful half-boot",
    category: "populer",
    price: 450,
    count: 19,
    seller: 2,
    category: "shoes",
  },
  {
    product_id: 9,
    product_name: "pink H-Boot",
    product_img: "../images/products/p5.PNG",
    description: "wonderful half-boot",
    category: "featured",
    price: 800,
    count: 23,
    seller: 3,
    category: "shoes",
  },
  {
    product_id: 10,
    product_name: "brown H-Boot",
    product_img: "../images/products/p7.png",
    description: "wonderful half-boot",
    category: "featured",
    price: 450,
    count: 17,
    seller: 3,
    category: "shoes",
  },
  {
    product_id: 11,
    product_name: "white H-Boot",
    product_img: "../images/products/p8.png",
    description: "wonderful half-boot",
    category: "featured",
    price: 450,
    count: 14,
    seller: 3,
    category: "shoes",
  },

  {
    product_id: 12,
    product_name: "Neck Sweater",
    product_img: "../images/p/p71.jpg",
    product_img1: "../images/p/p72.jpg",
    product_img2: "../images/p/p73.jpg",
    product_img3: "../images/p/p74.jpg",
    description: `Crew Neck Regular Long Sleeve Women's Tricot Sweater
        Ribbed ankles and bottom`,
    category: "featured",
    price: 450,
    count: 47,
    seller: 3,
    category: "topwear",
  },

  {
    product_id: 13,
    product_name: "Brown Jacket ",
    product_img: "../images/p/p53.jpg",
    product_img1: "../images/p/p54.jpg",
    product_img2: "../images/p/p51.jpg",
    product_img3: "../images/p/p52.jpg",
    description: `Waistband
        Front double pocket
        made of stamp fabric`,
    category: "featured",
    price: 1500,
    count: 23,
    seller: 2,
    category: "jacket",
  },
  {
    product_id: 14,
    product_name: "Short T-shirt",
    product_img: "../images/p/p31.jpg",
    product_img1: "../images/p/p32.jpg",
    product_img2: "../images/p/p33.jpg",
    product_img3: "../images/p/p34.jpg",
    description: " Crew Neck Short Sleeve Combed Cotton Men's T-shirt From combed cotton fabric short sleeved T-Shirt",
    category: "featured",
    price: 200,
    count: 30,
    seller: 1,
    category: "topwear",
  },
  {
    product_id: 15,
    product_name: "Black Boot",
    product_img: "../images/products/p6.PNG",
    description: "wonderful half-boot",
    category: "populer",
    price: 600,
    count: 29,
    seller: 2,
    category: "shoes",
  },

];
// localStorage.setItem("products", JSON.stringify(products));
var dataInLocalStorage = JSON.parse(localStorage.getItem("products"));
// if (dataInLocalStorage == null) {
// }

var numOfProducts = JSON.parse(localStorage.getItem("products")).length;
var ProductItem = JSON.parse(localStorage.getItem("products"));
console.log(numOfProducts);
//store products in local storage. esraa
window.addEventListener("load", function () {
  for (let i = 0; i < numOfProducts; i++) {
    document.getElementsByClassName("pro")[i].addEventListener("click", function () {
      let ID = (ProductItem[i].product_id) - 1;
      // Store the ID in localStorage
      localStorage.setItem('productID', ID);
      // Redirect to the productDetails.html page
      window.location.href = '../html/productDetails.html';
    });
  }
});
//end of my code


function renderProduct() {                           //mohamed
  // Retrieve products from local storage
  const products = JSON.parse(localStorage.getItem("products"));

  // Get the element where you want to render the products
  const productsContainer = document.getElementById("products-container");
  console.log(productsContainer);


  const shoesContainer = document.getElementById("shoes-container");
  console.log(shoesContainer);

  // Check if there are products in local storage
  if (products && products.length > 0) {
    // Clear existing content in the container
    productsContainer.innerHTML = "";

    shoesContainer.innerHTML = "";

    // products.forEach((item) => {
    //   const productHTML = `
    //     <div class="product text-center col-12 col-md-4 col-lg-3">
    //     <div class="Product_image">
    //     <img class="img-fluid mb-3" src="${item.product_img}" alt="product">
    //     </div>
    //     <div class="star">
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //         <i class="fa-solid fa-star"></i>
    //     </div>
    //     <h5 class="p-name">${item.product_name}</h5>
    //     <h4 class="p-price">${item.price}</h4>
    //     <a href=html/productDetails.html?id=${item.product_id}  class="buy-btn id="">Buy Now</a>
    // </div>
    //     `;

    //   // Append the product HTML to the container
    //   productsContainer.innerHTML += productHTML;
    // });

    let count = 0;
    for (let i = 0; i < products.length; i++) {


      let productHTML = `
        <div class="product text-center col-12 col-md-4 col-lg-3">
        <div class="Product_image">
        <img class="img-fluid mb-3" src="${products[i].product_img}" alt="product">
        </div>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <h5 class="p-name">${products[i].product_name}</h5>
        <h4 class="p-price">${products[i].price}</h4>
        <a href=html/productDetails.html?id=${products[i].product_id}  class="buy-btn id="">Buy Now</a>
    </div>
        `;
      if (products[i].category == "topwear" && count < 4) {
        count++;
        // Append the product HTML to the container
        productsContainer.innerHTML += productHTML;
      } else if (products[i].category == "shoes" && count < 8) {
        count++;
        shoesContainer.innerHTML += productHTML;
      }


    }

    // Loop through each product and generate HTML
  } else {
    // Handle the case when there are no products in local storage
    productsContainer.innerHTML = "<p>No products available</p>";
  }
}
// Check if local storage is supported by the browser

renderProduct();





// {
//   product_id: 3,
//   product_name: "long  Shirt",
//   product_img: "../images/p/p13.jpg",
//   product_img1: "../images/p/p14.jpg",
//   product_img2: "../images/p/p11.jpg",
//   product_img3: "../images/p/p12.jpg",
//   description: `Regular Fit Long Sleeve Oxford Men's Shirt
//     Button collar
//     Oxford fabric
//     One chest pocket`,
//   price: "600$ ",
//   category:"featured"
// },
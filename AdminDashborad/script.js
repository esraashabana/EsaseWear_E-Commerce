const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



let userCount;
//localstorage has data
if(localStorage.users != null){
    userCount=JSON.parse(localStorage.users);
}



document.addEventListener("DOMContentLoaded", function() {
	let countCustomer = 0;
	let countSeller=0;
	// Count the number of elements with type "customer"
	for (let i = 0; i < userCount.length; i++) {
		if (userCount[i].type === "customer") {
			countCustomer++;
		}else if(userCount[i].type === "seller"){
			countSeller++;
		}
	}

	//console.log(countCustomer);


	// Update HTML element content
	let numberOfCustomerElement = document.getElementById("numberOfCustomer");
	let numberOfSellerElement = document.getElementById("numberOfSeller");
	if (numberOfCustomerElement) {
		numberOfCustomerElement.innerHTML = `<span>${countCustomer}</span>`;
	} 
	if (numberOfSellerElement) {
		numberOfSellerElement.innerHTML = `<span>${countSeller}</span>`;
	} 

});


let productCount;
//localstorage has data
if(localStorage.products != null){
    productCount=JSON.parse(localStorage.products);
}




document.addEventListener("DOMContentLoaded", function () {
	let countOfProducts = 0;

	// Assuming productData is an array of products
	for (let i = 0; i < productCount.length; i++) {
		// Example: Count only products with a certain condition (e.g., count products with price > 50)
			countOfProducts++;
		
	}

	console.log(countOfProducts);

	// Update HTML element content
	let numberOfProductElement = document.getElementById("numberOfProduct");
	numberOfProductElement.innerHTML = `<span>${countOfProducts}</span>`;
});



//count of orders

let ordersCount;
//localstorage has data
if(localStorage.OrderData != null){
    ordersCount=JSON.parse(localStorage.OrderData);
}


document.addEventListener("DOMContentLoaded", function () {
	let countOfOrders = 0;

	// Assuming productData is an array of products
	for (let i = 0; i < ordersCount.length; i++) {
		// Example: Count only products with a certain condition (e.g., count products with price > 50)
		countOfOrders++;
		
	}

	console.log(countOfOrders);

	// Update HTML element content
	let numberOfOrdersElement = document.getElementById("numberOfOrders");
	numberOfOrdersElement.innerHTML = `<span>${countOfOrders}</span>`;
});




//logout

document.addEventListener("DOMContentLoaded", function () {
    // ... (Your existing code)

    // Get the logout button element
    const logoutBtn = document.getElementById("logoutBtn");

    // Add an event listener for the logout button
    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Perform logout logic here if needed (e.g., clearing session, etc.)

        // Redirect to the home page (replace 'home.html' with your actual home page URL)
        window.location.href = '../index.html';
    });
});

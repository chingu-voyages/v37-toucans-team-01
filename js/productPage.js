let cart = document.querySelectorAll('.add-cart-btn');

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers();
    });
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.zero11').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.zero11').textContent = 1;
    }

}


function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
   
    const sumvalue = parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumvalue;
    console.log()
    if(sumvalue < 0) {
        totalClicks.innerText = 0;
    };
     
    

}

totalClick(click); 
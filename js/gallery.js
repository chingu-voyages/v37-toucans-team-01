let drinks = [
	{
		name: 'Busch Beer',
		img: 'beer1.jpg',
		price: '$16.73',
		id: 1,
		button: 'Add to Cart',
	},
	{
		name: 'Pabst Blue Ribbon Beer',
		img: 'beer2.jpg',
		price: '$6.48',
		id: 2,
		button: 'Add to Cart',
	},
	{
		name: 'Edelweiss Wheat Beer',
		img: 'beer3.png',
		price: '$26.96 ',
		id: 3,
		button: 'Add to Cart',
	},
	{
		name: 'Heineken beer',
		img: 'beer4.jpg',
		price: '$0.62',
		id: 4,
		button: 'Add to Cart',
	},
	{
		name: 'Damm lemon Beer',
		img: 'beer5.jpg',
		price: '$35.19',
		id: 5,
		button: 'Add to Cart',
	},
	{
		name: 'peroni Gran Riserva',
		img: 'beer6.png',
		price: '$47.64',
		id: 6,
		button: 'Add to Cart',
	},
	{
		name: ' Carbonated soft drinks',
		img: 'beverage1.jpg',
		price: '$1.00',
		id: 7,
		button: 'Add to Cart',
	},
	{
		name: ' Real orange fruit juice',
		img: 'beverage2.jpg',
		price: '$2.18',
		id: 8,
		button: 'Add to Cart',
	},
	{
		name: 'Real mixed fruit juice',
		img: 'beverage3.jpg',
		price: '$2.18',
		id: 9,
		button: 'Add to Cart',
	},
	{
		name: 'Real masala guava fruit juice',
		img: 'beverage4.jpg',
		price: '$2.18',
		id: 10,
		button: 'Add to Cart',
	},
	{
		name: 'Sparkling exotic juice drink',
		img: 'beverage5.jpg',
		price: '$5.50',
		id: 11,
		button: 'Add to Cart',
	},
	{
		name: 'Active 6B',
		img: 'beverage6.jpg',
		price: '$1.00',
		id: 12,
		button: 'Add to Cart',
	},
	{
		name: 'CATENA ZAPATA',
		img: 'wine 1.jpg',
		price: '$57.42',
		id: 13,
		button: 'Add to Cart',
	},
	{
		name: 'CLOS DE VOUGEOT',
		img: 'wine 2.jpg',
		price: '$148.96 ',
		id: 14,
		button: 'Add to Cart',
	},
	{
		name: 'harvest fruits mulled wine',
		img: 'wine3.jpg',
		price: '$5.76 ',
		id: 15,
		button: 'Add to Cart',
	},
	{
		name: 'Belle & co sparkling wine',
		img: 'wine 4b.jpg',
		price: '$5.35 ',
		id: 14,
		button: 'Add to Cart',
	},
	{
		name: 'Buckfast',
		img: 'wine5.jpg',
		price: '$10.71 ',
		id: 15,
		button: 'Add to Cart',
    },
    {
		name: 'Laurent-Perrier',
		img: 'wine6.png',
		price: '$46.90',
		id: 16,
		button: 'Add to Cart',
    },
    
];
// console.log(drinks)
let drinksSection = document.querySelector("#gallery-drinks");
let html = "";
drinks.forEach(drink => {
    html += `
        <div class="col-md-4">
            <div class="card h-75 my-5"  style="width: 18rem" key=${drink.id} >
                <p class="card-text text-center h3 text-muted mt-2">${drink.name}</p>
                <img src="assets/images/products/${drink.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text text-muted pb-2 fw-bold ">${drink.price}</p>
                    
                </div>
            </div>
            <button type="button" class="btn btn-outline-secondary btn-lg p-2">${drink.button}</button>
        </div>
    `;
        drinksSection.innerHTML = html

    
});




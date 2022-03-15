// explore our category
let category = [
    {
        category_image: "cognac",
        category_name: "Cognac"
    },
    {
        category_image: "champagne",
        category_name: "Champagne"
    },
    {
        category_image: "whisky",
        category_name: "Whisky"
    },
    {
        category_image: "wines",
        category_name: "Wines"
    },
    {
        category_image: "spirits",
        category_name: "Spirits"
    },
    {
        category_image: "tequila",
        category_name: "Tequila"
    },
    {
        category_image: "mixers",
        category_name: "Mixers & Soft Drinks"
    },
    {
        category_image: "extras",
        category_name: "Extras"
    }
]

console.log ('Explore popular categories', category.length)

let divCategory = document.getElementById('category-area');
let html = "";
    category.forEach(show=> {
        html += `<div class="col-lg-3 col-md-6 col-sm-auto">
                    <img class="img-fluid w-75 rounded" src="assets/images/homepage/${show.category_image}.jpg" alt="">
                    <p class="text-black font-weight-bold">${show.category_name} <span><img src="icons/arrow-right-short.svg" alt=""></span></p>
                </div>`


        console.log(show)
        divCategory.innerHTML = html
    })




    // testimonial box

let testimonialsContainer = document.querySelector('.testimonials-container');
let testimonial = testimonialsContainer.querySelector('.testimonial');
let logo = testimonialsContainer.querySelector('.logo');
let username = testimonialsContainer.querySelector('.username');
let role = testimonialsContainer.querySelector('.role');

let testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketer',
        photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
            "I've worked with literally hundreds of Drink suppliers. These guys go over and beyond without a glitch- every time!"
    },
    {
        name: 'June Cha',
        position: 'Top Buyer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
            'Amazing suppliers that delivered the task exactly how we need it, do your self a favor in using them, you will not be disappointed by the work delivered. They will go the extra mile to make sure that you are happy- I will surely work again with him!'
    },
    {
        name: 'Iida Niskanen',
        position: 'Distributor',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
            "They are hard workers. Communication was also very good and very responsive all the time, something not easy to find in many stores. We'll definitely repeat with him."
    },
    {
        name: 'Renee Sims',
        position: 'Partner',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
            "They do everything to get the job done right. This is the second time I've used them, and I'll hire them again in the future."
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
            "I had my concerns that due to a tight deadline this project can't be done but they proved me wrong not only that they delivered an outstandingly but they managed to deliver 1 day prior to the deadline. I'm looking forward to work with them again and I totally recommend them. Thanks again!"
    },
    {
        name: 'Sasha Ho',
        position: 'Govenment Agent',
        photo:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text:
            'Top notch suppliers of drink service. They communicate well, work fast and produce quality work. We have been lucky to work with them!'
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
            'Proactive with a strong work ethic. They are very strong in supply processing. They have good dynamics to achieve due dates and outstanding results.'
    }
];
let idx = 1;

function updateTestimonial() {
    let { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    logo.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);
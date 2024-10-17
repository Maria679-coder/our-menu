const menu = [
    {
        id: 1,
        tittle: "Buttermilk Pancakes",
        price: 15.99,
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        category: "breakfast",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg"
    },
    {
        id: 2,
        tittle: "Dinner Double",
        price: 13.99,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        category: "lunch",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg"
    },
    {
        id: 3,
        tittle: "Godzilla Milkshake",
        price: 6.99,
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        category: "shakes",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg"
    },
    {
        id: 4,
        tittle: "Country Delight",
        price: 20.99,
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
        category: "breakfast",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg"
    },
    {
        id: 5,
        tittle: "Egg Attack",
        price: 22.99,
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
        category: "lunch",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg"
    },
    {
        id: 6,
        tittle: "Oreo Dream",
        price: 18.99,
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
        category: "shakes",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg"
    },
    {
        id: 7,
        tittle: "Bacon Overflow",
        price: 8.99,
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.",
        category: "breakfast",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg"
    },
    {
        id: 8,
        tittle: "American Classic",
        price: 12.99,
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffau",
        category: "lunch",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg"
    },
    {
        id: 9,
        tittle: "Quarantine Buddy",
        price: 16.99,
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        category: "shakes",
        thumbnail: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg"
    },
];

let products = document.querySelector(".products");

document.getElementById("allCate").addEventListener('click', () => getAllItems(menu));

function getAllItems(menu) {
    let data = menu.map(item => `<div class="product">
        <img src=${item.thumbnail} alt="items">
        <header class="productinfo">
            <h3>${item.tittle}</h3>
            <span>$${item.price}</span>
        </header>
        <p class="para">
        ${item.description}
        </p>
    </div>`).join("");
    products.innerHTML = data;
}
getAllItems(menu);

function getBreakfast() {
    let filteredBreakfast = menu.filter(item => item.category === "breakfast");
    getAllItems(filteredBreakfast);
}
                         
function getLunch() {
    let filteredLunch = menu.filter(item => item.category === "lunch");
    getAllItems(filteredLunch);
}

function getShakes() {
    let filteredShakes = menu.filter(item => item.category === "shakes");
    getAllItems(filteredShakes);
}

// live search
const liveSearch = () => {
    let searchVal = document.getElementById('live').value.toLowerCase();
    let searchedArr = menu.filter(item => 
        item.tittle.toLowerCase().includes(searchVal) ||
        item.description.toLowerCase().includes(searchVal) ||
        item.category.toLowerCase().includes(searchVal)
    );
    getAllItems(searchedArr);
};

document.getElementById('live').addEventListener('input', liveSearch);



// npx create-react-app   is se next app ka name 
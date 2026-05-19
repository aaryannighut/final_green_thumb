const crops = [
    {
        name: "Potato",
        image: "./img/potato.jpg",
        details: [
            "Spacing: 3-4 inches apart, 18 inches between rows",
            "Planting depth:¼ - ½ inches deep ",
            "Fertilizer: low nitrogen, high phosphorus, legumes produce their own nitrogen ",
            "Sunlight: 4-6 hours",
            "Required temp: 36-65°F",
            "Plant type: fruiting ",
            "Scientific name: Pisum sativum",
            "Water: keep soil moist, not overly saturated",
            "Soil type:  loose, well draining",
            "Grow time: 45-60 days",
            "Ripe: when peas reach intended size, pick before pod fully develops"
        ]
    },
    {
        name: "Onion",
        image: "./img/onion.jpg",
        details: [
            "Spacing:8-12 inches apart, 18 inches between rows ",
            "Planting depth: ½ inch",
            "Fertilizer: high nitrogen ",
            "Sunlight: 6 hours ",
            "Required temp: 30-60°F",
            "Plant type:leafy vegetable",
            "Scientific name: Spinacia oleracea ",
            "Water: Keep soil consistently moist",
            "Soil type: Rich, loose, well-draining",
            "Grow time: 35-45 days",
            "Ripet: start picking leaves when plant is established "
        ]
    },
    {
        name: "Cucumber",
        image: "./img/Cucumbers.jpg",
        details: [
            "Spacing:24-36 inches apart ",
            "Planting depth: 1 inch",
            "Fertilizer:  high in nitrogen",
            "Sunlight:more than 6 hours a day",
            "Required temp: 65-75°F",
            "Plant type: Fruiting",
            "Scientific name:Cucumis sativus ",
            "Water:consistent water, more when plant is producing",
            "Soil type: Sandy and loamy, well draining",
            "Grow time: 50-70 days",
            "Ripe: pick before mature"
        ]
    },
    {
        name: "Broccoli",
        image: "./img/Broccoli.jpg",
        details: [
            "Spacing:18-24 inches apart",
            "Planting depth: ¼-½ inch",
            "Fertilizer: Balanced",
            "Sunlight: At least 6 hours a day",
            "Required temp: 55-75°F",
            "Plant type: Vegetable",
            "Scientific name: Cucumis sativus",
            "Water: water regularly to encourage large heads",
            "Soil type:  sandy, loamy, well draining",
            "Grow time: 80-100 days",
            "Ripe:  when head stops growing"
        ]
    },
    {
        name: "Snap Peas",
        image: "./img/snap.jpg",
        details: [
            "spacing: 3-4 inches apart, 18 inches between rows (when trellised)",
            "planting depth: ¼ - ½ inches deep",
            "fertilizer: low nitrogen, high phosphorus, legumes produce their own nitrogen",
            "sunlight: 4-6 hours", 
            "required temp: 36-65 ​​°F",
            "plant type: fruiting", 
            "scientific name: Pisum sativum",
            "water: keep soil moist, not overly saturated",
            "soil type: loose, well draining",
            "grow time: 45-60 days", 
            "ripe: when peas reach intended size, pick before pod fully develops ",
        ]
    },
    {
        name: "Beets",
        image: "./img/beets.jpg",
        details: [
            "Spacing: 3 inches aparts,6 inches between rows",
            "Planting depth: ",
            "Fertilizer:High nitrogen ",
            "Sunlight: 4 hours for greens, 6 hour",
            "Required temp: 55-75°F",
            "Plant type: Root vegetable",
            "Scientific name:Beta vulgaris ",
            "Water:keep soil moist ",
            "Soil type: loose, well draining (remove stones) ",
            "Grow time: 50-60 days",
            "Ripe: picked when desired"
        ]
    },
    {
        name:"Garlic",
        image:"./img/garlic.jpg",
        details:[
            "-spacing: 4-6 inches apart",

            "-planting depth: 3-5 inches deep depending on amount of mulch",

            "-fertilizer: high nitrogen, balanced",

            "-sunlight: 6-8 hours",

            "-required temp: -35-80 ​​°F",

            "-plant type: bulbing plant",
            
            "-scientific name: Allium sativum",

            "-water: keep soil moist, increase if leaves turn yellow",

            "-soil: well draining, loose (remove stones)"
        ]
    }
];

const cropContainer = document.getElementById("cropp-container");

crops.forEach(crop => {
    const cropCard = document.createElement("div");
    cropCard.classList.add("cropp-card");

    cropCard.innerHTML = `
        <img src="${crop.image}" alt="${crop.name}">
        <h2>${crop.name}</h2>
        <ul>
            ${crop.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
    `;

    cropContainer.appendChild(cropCard);
});
// hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking a nav item
    document.querySelectorAll('#navbar li a').forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});
const crops = [
    
    {
        name: "Mango",
        image: "https://img.freepik.com/free-psd/delicious-mango-studio_23-2151843107.jpg?ga=GA1.1.81467578.1745644809&semt=ais_hybrid&w=740",
        details: [
            "Spacing: 20-25 feet apart",
            "Planting depth: 1-2 feet",
            "Fertilizer: High potassium and phosphorus",
            "Sunlight: 8-10 hours",
            "Required temp: 25-40°C",
            "Plant type: Fruiting tree",
            "Scientific name: Mangifera indica",
            "Water: Deep watering, reduce during dormancy",
            "Soil type: Well-draining, loamy",
            "Grow time: 3-5 years to bear fruit",
            "Ripe: When fruit turns yellow/orange and softens"
        ]
    },
    {
        name: "Banana",
        image: "https://img.freepik.com/free-photo/ai-generated-image-banana_23-2150683022.jpg?ga=GA1.1.81467578.1745644809&semt=ais_hybrid&w=740",
        details: [
            "Spacing: 6-8 feet apart",
            "Planting depth: 1-1.5 feet",
            "Fertilizer: High nitrogen, potassium, and phosphorus",
            "Sunlight: 6-8 hours",
            "Required temp: 15-35°C",
            "Plant type: Fruiting herbaceous plant",
            "Scientific name: Musa spp.",
            "Water: Frequent watering, keep soil moist",
            "Soil type: Rich, well-draining loam",
            "Grow time: 9-12 months",
            "Ripe: When banana bunches turn yellow"
        ]
    },
    {
        name: "Guava",
        image: "https://img.freepik.com/free-photo/guava-fruit-still-life_23-2151551121.jpg?ga=GA1.1.81467578.1745644809&semt=ais_hybrid&w=740",
        details: [
            "Spacing: 10-15 feet apart",
            "Planting depth: 1.5-2 feet",
            "Fertilizer: Balanced with nitrogen and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 20-35°C",
            "Plant type: Fruiting tree",
            "Scientific name: Psidium guajava",
            "Water: Regular watering, avoid waterlogging",
            "Soil type: Well-draining sandy loam",
            "Grow time: 2-3 years to bear fruit",
            "Ripe: When fruit turns yellow and softens"
        ]
    },
    {
        name: "Papaya",
        image: "https://img.freepik.com/premium-photo/ripe-papaya-with-leaves-white-wooden-background_185193-58964.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 6-8 feet apart",
            "Planting depth: 1-1.5 feet",
            "Fertilizer: High nitrogen and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 21-33°C",
            "Plant type: Fruiting herbaceous plant",
            "Scientific name: Carica papaya",
            "Water: Moderate watering, avoid waterlogging",
            "Soil type: Well-draining sandy loam",
            "Grow time: 6-9 months",
            "Ripe: When fruit turns yellow-orange"
        ]
    },
    {
        name: "Pomegranate",
        image: "https://img.freepik.com/free-photo/red-pomegranates-wooden-platter_114579-11826.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 10-12 feet apart",
            "Planting depth: 1.5-2 feet",
            "Fertilizer: High phosphorus and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 20-38°C",
            "Plant type: Fruiting shrub/tree",
            "Scientific name: Punica granatum",
            "Water: Moderate watering, drought-resistant",
            "Soil type: Well-draining sandy loam",
            "Grow time: 2-3 years to bear fruit",
            "Ripe: When fruit turns deep red and hardens"
        ]
    },
    {
        name: "Coconut",
        image: "https://img.freepik.com/free-photo/coconut-fruit_74190-2755.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 20-25 feet apart",
            "Planting depth: 2-3 feet",
            "Fertilizer: High potassium and phosphorus",
            "Sunlight: 8+ hours",
            "Required temp: 25-40°C",
            "Plant type: Fruiting palm",
            "Scientific name: Cocos nucifera",
            "Water: Deep watering, drought-resistant",
            "Soil type: Well-draining sandy soil",
            "Grow time: 5-6 years to bear fruit",
            "Ripe: When husk turns brown and dry"
        ]
    },
    {
        name: "Chikoo (Sapota)",
        image: "https://img.freepik.com/premium-photo/close-up-sapodilla-fruit-tree_1048944-23233076.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 25 feet apart",
            "Planting depth: 1.5-2 feet",
            "Fertilizer: Balanced with nitrogen and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 20-35°C",
            "Plant type: Fruiting tree",
            "Scientific name: Manilkara zapota",
            "Water: Moderate watering, avoid waterlogging",
            "Soil type: Well-draining sandy loam",
            "Grow time: 3-5 years to bear fruit",
            "Ripe: When fruit turns brown and softens"
        ]
    },
    {
        name: "Jackfruit",
        image: "https://img.freepik.com/premium-photo/close-up-fruits-growing-tree-trunk_1048944-21236072.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 25-30 feet apart",
            "Planting depth: 2-3 feet",
            "Fertilizer: High nitrogen and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 20-35°C",
            "Plant type: Fruiting tree",
            "Scientific name: Artocarpus heterophyllus",
            "Water: Regular watering, avoid waterlogging",
            "Soil type: Well-draining clayey loam",
            "Grow time: 3-5 years to bear fruit",
            "Ripe: When fruit turns yellowish-brown and emits a strong fragrance"
        ]
    },
    {
        name: "Lemon",
        image: "https://img.freepik.com/free-photo/close-up-fresh-juicy-limes-pile_167946-164.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 10-15 feet apart",
            "Planting depth: 1-2 feet",
            "Fertilizer: High phosphorus and potassium",
            "Sunlight: 6-8 hours",
            "Required temp: 20-35°C",
            "Plant type: Fruiting shrub/tree",
            "Scientific name: Citrus limon",
            "Water: Moderate watering, avoid overwatering",
            "Soil type: Well-draining sandy loam",
            "Grow time: 2-3 years to bear fruit",
            "Ripe: When fruit turns bright yellow"
        ]
    },
    {
        name: "Pineapple",
        image: "https://img.freepik.com/premium-photo/close-up-fresh-green-leaf_1048944-20080892.jpg?ga=GA1.1.81467578.1745644809&w=740",
        details: [
            "Spacing: 2-3 feet apart",
            "Planting depth: 6-8 inches",
            "Fertilizer: High potassium and phosphorus",
            "Sunlight: 6-8 hours",
            "Required temp: 20-32°C",
            "Plant type: Fruiting herbaceous plant",
            "Scientific name: Ananas comosus",
            "Water: Moderate watering, drought-resistant",
            "Soil type: Well-draining sandy loam",
            "Grow time: 18-24 months",
            "Ripe: When fruit turns golden yellow and emits a sweet aroma"
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

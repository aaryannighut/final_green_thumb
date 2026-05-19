const crops = [
    
        {
            name: "Marigold",
            image: "https://img.freepik.com/premium-photo/close-up-yellow-flowering-plant_1048944-29122882.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 8-10 inches apart",
                "Planting depth: ¼ inch",
                "Fertilizer: Balanced, organic compost preferred",
                "Sunlight: 6-8 hours",
                "Required temp: 60-75°F",
                "Plant type: Flowering",
                "Scientific name: Tagetes",
                "Water: Moderate, avoid overwatering",
                "Soil type: Well-draining, sandy or loamy",
                "Grow time: 50-60 days",
                "Bloom: When flowers are bright and fully open"
            ]
        },
        {
            name: "Hibiscus",
            image: "https://img.freepik.com/free-photo/closeup-shot-beautiful-hawaiian-hibiscus-tuscany-elba-italy_181624-19178.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 3-6 feet apart",
                "Planting depth: Surface level with roots well-covered",
                "Fertilizer: High phosphorus for blooms",
                "Sunlight: 6-8 hours",
                "Required temp: 65-95°F",
                "Plant type: Shrub Flowering",
                "Scientific name: Hibiscus rosa-sinensis",
                "Water: Regular, keep soil moist but not soggy",
                "Soil type: Well-draining, rich in organic matter",
                "Grow time: 90-120 days",
                "Bloom: Large, colorful flowers throughout the year"
            ]
        },
        {
            name: "Jasmine",
            image: "https://img.freepik.com/premium-photo/beautiful-fresh-jasmine-flowers-garden_41471-1659.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 3-5 feet apart",
                "Planting depth: ½ inch",
                "Fertilizer: Organic compost, phosphorus-rich",
                "Sunlight: 4-6 hours",
                "Required temp: 60-85°F",
                "Plant type: Vine/Flowering",
                "Scientific name: Jasminum",
                "Water: Moderate, avoid waterlogging",
                "Soil type: Well-draining, loamy soil",
                "Grow time: 60-90 days",
                "Bloom: Fragrant white flowers in clusters"
            ]
        },
        {
            name: "Lotus",
            image: "https://img.freepik.com/free-photo/closeup-shot-lotus-flower_181624-31124.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 12-18 inches apart in water",
                "Planting depth: 2-6 inches in water",
                "Fertilizer: Aquatic plant fertilizer",
                "Sunlight: 6-8 hours",
                "Required temp: 75-85°F",
                "Plant type: Aquatic Flowering",
                "Scientific name: Nelumbo nucifera",
                "Water: Grown in still water",
                "Soil type: Clayey, nutrient-rich",
                "Grow time: 90-120 days",
                "Bloom: Large pink/white flowers on water surface"
            ]
        },
        {
            name: "Rose",
            image: "https://img.freepik.com/premium-photo/close-up-red-rose-plant_1048944-24034695.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 12-36 inches apart (depending on variety)",
                "Planting depth: 1-2 inches below graft point",
                "Fertilizer: Rich in phosphorus and potassium",
                "Sunlight: At least 6 hours a day",
                "Required temp: 65-80°F",
                "Plant type: Shrub Flowering",
                "Scientific name: Rosa",
                "Water: Regular watering, avoid wetting leaves",
                "Soil type: Well-draining, loamy, rich in organic matter",
                "Grow time: 50-80 days",
                "Bloom: Repeated blooming in different seasons"
            ]
        },
        {
            name: "Sunflower",
            image: "https://img.freepik.com/premium-photo/close-up-sunflower-against-sky_1048944-6241047.jpg?ga=GA1.1.607455288.1737386031",
            details: [
                "Spacing: 12-24 inches apart",
                "Planting depth: 1-1.5 inches",
                "Fertilizer: Nitrogen-rich for early growth, phosphorus for blooming",
                "Sunlight: At least 8 hours",
                "Required temp: 70-85°F",
                "Plant type: Flowering",
                "Scientific name: Helianthus annuus",
                "Water: Regular watering, drought-resistant once established",
                "Soil type: Well-draining, rich in organic matter",
                "Grow time: 70-100 days",
                "Bloom: Large, bright yellow blooms facing the sun"
            ]
        },
            {
                name: "Bougainvillea",
                image: "https://img.freepik.com/free-photo/plant-pink-flowers_1398-3049.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 3–4 feet apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Balanced fertilizer with higher phosphorus",
                    "Sunlight: Full sun, at least 6 hours",
                    "Required temp: 65–95°F",
                    "Plant type: Shrub/Climber",
                    "Scientific name: Bougainvillea spp.",
                    "Water: Deep watering every 2–3 weeks once established",
                    "Soil type: Well-draining, sandy or loamy",
                    "Grow time: 90–120 days",
                    "Bloom: Vibrant, paper-like bracts in various colors"
                ]
            },
            {
                name: "Ixora",
                image: "https://img.freepik.com/premium-photo/close-up-red-flowering-plant_1048944-9947957.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 18–24 inches apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Balanced fertilizer with micronutrients",
                    "Sunlight: Full sun to partial shade",
                    "Required temp: 70–85°F",
                    "Plant type: Shrub",
                    "Scientific name: Ixora coccinea",
                    "Water: Regular watering, keep soil moist",
                    "Soil type: Well-draining, acidic to neutral",
                    "Grow time: 60–90 days",
                    "Bloom: Clusters of small, tubular flowers in red, orange, or yellow"
                ]
            },
            {
                name: "Kalanchoe",
                image: "https://img.freepik.com/premium-photo/close-up-flowers_1048944-28573108.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 6–12 inches apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Low-nitrogen, high-phosphorus fertilizer",
                    "Sunlight: Bright, indirect light",
                    "Required temp: 60–85°F",
                    "Plant type: Succulent",
                    "Scientific name: Kalanchoe spp.",
                    "Water: Allow soil to dry out between waterings",
                    "Soil type: Well-draining, sandy or cactus mix",
                    "Grow time: 60–90 days",
                    "Bloom: Clusters of small, colorful flowers"
                ]
            },
            {
                name: "Gerbera Daisy",
                image: "https://img.freepik.com/free-photo/top-view-pink-flower_23-2147623043.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 12–18 inches apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Balanced fertilizer with higher phosphorus",
                    "Sunlight: Full sun, at least 6 hours",
                    "Required temp: 65–75°F",
                    "Plant type: Flowering perennial",
                    "Scientific name: Gerbera jamesonii",
                    "Water: Regular watering, keep soil moist but not soggy",
                    "Soil type: Well-draining, rich in organic matter",
                    "Grow time: 90–120 days",
                    "Bloom: Large, vibrant flowers in various colors"
                ]
            },
            {
                name: "Begonia",
                image: "https://img.freepik.com/premium-photo/blooming-pink-begonias_1048944-16486960.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 8–12 inches apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Balanced fertilizer with higher phosphorus",
                    "Sunlight: Partial shade to full shade",
                    "Required temp: 60–75°F",
                    "Plant type: Flowering perennial",
                    "Scientific name: Begonia spp.",
                    "Water: Regular watering, keep soil moist",
                    "Soil type: Well-draining, rich in organic matter",
                    "Grow time: 60–90 days",
                    "Bloom: Bright, colorful flowers in various shapes"
                ]
            },
         
    
            {
                name: "Madhumalti (Rangoon Creeper)",
                image: "https://img.freepik.com/premium-photo/close-up-flowering-plant_1048944-27838904.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 3–4 feet apart",
                    "Planting depth: Surface level, roots well-covered",
                    "Fertilizer: Balanced fertilizer with higher phosphorus",
                    "Sunlight: Full sun to partial shade",
                    "Required temp: 70–90°F",
                    "Plant type: Climber",
                    "Scientific name: Quisqualis indica",
                    "Water: Regular watering, keep soil moist",
                    "Soil type: Well-draining, slightly acidic to neutral",
                    "Grow time: 90–120 days",
                    "Bloom: Fragrant flowers that change color from white to pink to red"
                ]
            },
            {
                name: "Peony",
                image: "https://img.freepik.com/free-photo/natural-white-peony-leaves-copy-space_169016-12312.jpg?ga=GA1.1.607455288.1737386031&semt=ais_hybrid&w=740",
                details: [
                    "Spacing: 3–4 feet apart",
                    "Planting depth: Eyes (buds) 1–2 inches below soil surface",
                    "Fertilizer: Balanced fertilizer every 4–6 weeks during growing season",
                    "Sunlight: Full sun to partial shade",
                    "Required temp: 55–70°F",
                    "Plant type: Flowering perennial",
                    "Scientific name: Paeonia spp.",
                    "Water: Regular watering, keep soil moist but not soggy",
                    "Soil type: Well-draining, rich in organic matter",
                    "Grow time: 90–120 days",
                    "Bloom: Large, fragrant flowers in various colors"
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
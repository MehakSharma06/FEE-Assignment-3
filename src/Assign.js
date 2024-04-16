// Sample property data
const properties = [
    {
        id: 1,
        image:"https://www.99acres.com/universalapp/img/AboutMyProperty2.png",
        title: "About My Property",
        content:"Track prices & analyze market demands"
    },
    {
        id: 2,
        image:"https://www.99acres.com/universalapp/img/ReviewsRatings2.png",
        title: "Genuine reviews by Residents",
        content:"Know what residents are saying"
    },
    {
        id: 3,
        image:"https://www.99acres.com/universalapp/img/ReadIcons2.png",
        title: "Read Latest News",
        content:"On trending topics and policy updates"
    }
];

// Function to render featured property listings
function renderFeaturedProperties() {
    const propertyListings = document.querySelector('.property-listings');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <h3>${property.title}</h3>
            <p>${property.content}</p>
        `;
        propertyListings.appendChild(propertyCard);
    });
}

// Call the render function initially
renderFeaturedProperties();

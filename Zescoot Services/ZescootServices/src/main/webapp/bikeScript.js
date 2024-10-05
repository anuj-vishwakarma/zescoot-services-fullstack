/*document.querySelector('.filter-btn').addEventListener('click', function () {
  const bikeType = document.getElementById('bike-type').value;
  const availability = document.getElementById('availability').value;
  const rating = document.getElementById('rating').value;

  alert(`Filter applied:\nBike Type: ${bikeType}\nAvailability: ${availability}\nRating: ${rating}`);
});
*/

// Bike data array
const bikes = [
    { id: '#001', type: 'Mountain', model: 'Trek X-Caliber 8', availability: 'available', price: '$12/hr' },
    { id: '#002', type: 'Road', model: 'Specialized Allez', availability: 'rented', price: '$10/hr' },
    { id: '#003', type: 'Electric', model: 'Tesla Model B', availability: 'available', price: '$15/hr' },
    { id: '#004', type: 'Mountain', model: 'Rockrider ST 530', availability: 'rented', price: '$10/hr' },
    { id: '#005', type: 'Road', model: 'Cannondale CAAD13', availability: 'available', price: '$14/hr' },
];

// Function to render the bikes list
function renderBikes(bikes) {
    const bikeList = document.getElementById('bike-list');
    bikeList.innerHTML = ''; // Clear existing rows

    bikes.forEach(bike => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bike.id}</td>
            <td>${bike.type}</td>
            <td>${bike.model}</td>
            <td><span class="status ${bike.availability}">${capitalize(bike.availability)}</span></td>
            <td>${bike.price}</td>
            <td><button class="action-btn ${bike.availability === 'available' ? '' : 'disabled'}">${bike.availability === 'available' ? 'Rent Out' : 'Unavailable'}</button></td>
        `;
        bikeList.appendChild(row);
    });
}

// Capitalize the first letter of availability status
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initial render
renderBikes(bikes);

// Handle the filter button click event
document.getElementById('filter-btn').addEventListener('click', function () {
    const bikeType = document.getElementById('bike-type').value;
    const availability = document.getElementById('availability').value;

    // Filter bikes based on selection
    const filteredBikes = bikes.filter(bike => {
        const matchesType = bikeType === 'all' || bike.type.toLowerCase() === bikeType.toLowerCase();
        const matchesAvailability = availability === 'all' || bike.availability.toLowerCase() === availability.toLowerCase();
        return matchesType && matchesAvailability;
    });

    // Re-render the filtered list
    renderBikes(filteredBikes);
});

// Handle the "Add New Bike" button
const addBikeButton = document.getElementById('add-bike-btn');
addBikeButton.addEventListener('click', function () {
	console.log("clicked");
    window.location.href = 'addBikes.html';
});




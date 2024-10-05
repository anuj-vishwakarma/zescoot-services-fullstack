// JavaScript for handling the bike filter form
document.getElementById('filter-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const bikeType = document.getElementById('bike-type').value;
  const availability = document.getElementById('availability').value;

  alert(`Filtering bikes by:
  Bike Type: ${bikeType}
  Availability: ${availability}`);
});

// Chart.js for analytics (add this library to your project for a real chart)
const ctx = document.getElementById('bookingChart').getContext('2d');
const bookingChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Bookings',
            data: [50, 70, 110, 80, 150, 200, 170],
            backgroundColor: 'rgba(255, 123, 84, 0.2)',
            borderColor: '#ff7b54',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

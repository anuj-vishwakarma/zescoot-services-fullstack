// Booking data array
const bookings = [
    { id: '#BK001', customer: 'John Smith', bikeId: '#001', bookingDate: '2024-09-01', returnDate: '2024-09-05', status: 'completed' },
    { id: '#BK002', customer: 'Mary Johnson', bikeId: '#003', bookingDate: '2024-09-03', returnDate: '2024-09-07', status: 'pending' },
    { id: '#BK003', customer: 'David Lee', bikeId: '#002', bookingDate: '2024-09-04', returnDate: '2024-09-08', status: 'cancelled' },
    { id: '#BK004', customer: 'Sarah Connor', bikeId: '#005', bookingDate: '2024-09-10', returnDate: '2024-09-15', status: 'pending' },
    { id: '#BK005', customer: 'James Bond', bikeId: '#004', bookingDate: '2024-09-11', returnDate: '2024-09-14', status: 'completed' },
];

// Function to render bookings list
function renderBookings(bookings) {
    const bookingList = document.getElementById('booking-list');
    bookingList.innerHTML = ''; // Clear existing rows

    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.customer}</td>
            <td>${booking.bikeId}</td>
            <td>${booking.bookingDate}</td>
            <td>${booking.returnDate}</td>
            <td><span class="status ${booking.status}">${capitalize(booking.status)}</span></td>
            <td><button class="action-btn">View Details</button></td>
        `;
        bookingList.appendChild(row);
    });
}

// Capitalize the first letter of status
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initial render
renderBookings(bookings);

// Handle the filter button click event
document.getElementById('filter-btn').addEventListener('click', function () {
    const bookingStatus = document.getElementById('booking-status').value;
    const customerName = document.getElementById('customer-name').value.toLowerCase();

    // Filter bookings based on status and customer name
    const filteredBookings = bookings.filter(booking => {
        const matchesStatus = bookingStatus === 'all' || booking.status.toLowerCase() === bookingStatus.toLowerCase();
        const matchesCustomer = !customerName || booking.customer.toLowerCase().includes(customerName);
        return matchesStatus && matchesCustomer;
    });

    // Re-render the filtered list
    renderBookings(filteredBookings);
});

// Sample report data (Placeholder)
const reports = {
    summary: [
        { id: '#R001', totalBookings: 100, totalRevenue: '$5000', totalBikesRented: 80 },
        { id: '#R002', totalBookings: 150, totalRevenue: '$7500', totalBikesRented: 120 }
    ],
    monthly: [
        { month: 'August 2024', totalBookings: 50, totalRevenue: '$2500', totalBikesRented: 40 },
        { month: 'September 2024', totalBookings: 60, totalRevenue: '$3000', totalBikesRented: 50 }
    ],
    yearly: [
        { year: '2023', totalBookings: 600, totalRevenue: '$30000', totalBikesRented: 500 },
        { year: '2024', totalBookings: 400, totalRevenue: '$20000', totalBikesRented: 350 }
    ]
};

// Function to generate report based on type and date range
function generateReport(type, startDate, endDate) {
    const reportContainer = document.getElementById('report-container');
    reportContainer.innerHTML = ''; // Clear existing report

    let reportData;
    if (type === 'summary') {
        reportData = reports.summary;
    } else if (type === 'monthly') {
        reportData = reports.monthly;
    } else if (type === 'yearly') {
        reportData = reports.yearly;
    } else {
        reportContainer.innerHTML = '<p>No report data available.</p>';
        return;
    }

    const filteredReports = reportData.filter(report => {
        // For simplicity, we are not filtering by date range in this example
        // Implement date range filtering logic here if needed
        return true;
    });

    if (filteredReports.length === 0) {
        reportContainer.innerHTML = '<p>No reports match the selected filters.</p>';
        return;
    }

    // Create a table to display the report
    let table = '<table>';
    table += '<thead><tr>';
    if (type === 'monthly') {
        table += '<th>Month</th>';
    } else if (type === 'yearly') {
        table += '<th>Year</th>';
    } else {
        table += '<th>ID</th>';
    }
    table += '<th>Total Bookings</th><th>Total Revenue</th><th>Total Bikes Rented</th></tr></thead><tbody>';

    filteredReports.forEach(report => {
        table += '<tr>';
        if (type === 'monthly') {
            table += `<td>${report.month}</td>`;
        } else if (type === 'yearly') {
            table += `<td>${report.year}</td>`;
        } else {
            table += `<td>${report.id}</td>`;
        }
        table += `<td>${report.totalBookings}</td><td>${report.totalRevenue}</td><td>${report.totalBikesRented}</td></tr>`;
    });

    table += '</tbody></table>';
    reportContainer.innerHTML = table;
}

// Event listener for generate report button
document.getElementById('generate-report').addEventListener('click', function() {
    const reportType = document.getElementById('report-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Validate dates (simple check)
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
        alert('Start date should be before end date.');
        return;
    }

    generateReport(reportType, startDate, endDate);
});

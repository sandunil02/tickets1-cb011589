document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const totalCostElement = document.getElementById('total-cost');

    // Pricing information
    const pricing = {
        'Foreigner Adult': {
            normalHourPrice: 10,
            peakHourPrice: 13,
        },
        'Foreigner Child': {
            normalHourPrice: 5,
            peakHourPrice: 8,
        },
        'SL Adult': {
            normalHourPrice: 4,
            peakHourPrice: 6,
        },
        'SL Child': {
            normalHourPrice: 2,
            peakHourPrice: 3,
        },
    };

    // Function to calculate the total cost
    function calculateTotal() {
        let totalCost = 0;

        const categories = ['Foreigner Adult', 'Foreigner Child', 'SL Adult', 'SL Child'];
        categories.forEach(category => {
            const numTickets = parseInt(document.getElementById(category.toLowerCase()).value);
            const isPeakHour = isPeakHourSelected();
            const price = isPeakHour ? pricing[category].peakHourPrice : pricing[category].normalHourPrice;
            totalCost += numTickets * price;
        });

        // Save the total cost in local storage
        localStorage.setItem('totalCost', totalCost);

        totalCostElement.textContent = `Total cost: $${totalCost}`;
    }

    // Function to check if the selected duration is a peak hour
    function isPeakHourSelected() {
        const duration = document.getElementById('duration').value;
        return duration.includes('Peak');
    }

    bookingForm.addEventListener('input', calculateTotal);
    bookingForm.addEventListener('change', calculateTotal);
    bookingForm.addEventListener('submit', (event) => event.preventDefault());

    // Fill the form with saved data when the page loads
    const savedTotalCost = localStorage.getItem('totalCost');
    if (savedTotalCost) {
        totalCostElement.textContent = `Total cost: $${savedTotalCost}`;
    }
});

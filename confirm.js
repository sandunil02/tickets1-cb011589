window.onload = function () {
    // Retrieve order details from local storage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
  
    // Populate order summary
    document.getElementById('name').textContent = orderDetails.name;
    document.getElementById('date').textContent = orderDetails.date;
    document.getElementById('time').textContent = orderDetails.time;
    document.getElementById('duration').textContent = orderDetails.duration;
    document.getElementById('mobile').textContent = orderDetails.mobile;
    document.getElementById('email').textContent = orderDetails.email;
    document.getElementById('gender').textContent = orderDetails.gender;
  
    // Populate ticket summary
    const ticketSummary = orderDetails.tickets.map(ticket => {
      return `
        <tr>
          <td>${ticket.category}</td>
          <td>${ticket.quantity}</td>
          <td>${ticket.charge}</td>
        </tr>
      `;
    }).join('');
  
    document.getElementById('ticket-summary').innerHTML = ticketSummary;
  
    // Calculate total payable amount
    const totalAmount = orderDetails.tickets.reduce((total, ticket) => {
      return total + ticket.totalCharge;
    }, 0);
  
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
  };
  
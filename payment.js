
    window.onload = function () {
        const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
   
    document.getElementById('summary-table').innerHTML = summaryTableHTML;
     
        function enablePayButton() {
          const cardNumber = document.getElementById('card-number').value;
          const expiryDate = document.getElementById('expiry-date').value;
          const cvc = document.getElementById('cvc').value;
          const nameOnCard = document.getElementById('name-on-card').value;
      
          const isValid = cardNumber && expiryDate && cvc && nameOnCard;
      
          document.getElementById('pay-button').disabled = !isValid;
        }
      
      
        document.getElementById('card-number').addEventListener('input', enablePayButton);
        document.getElementById('expiry-date').addEventListener('input', enablePayButton);
        document.getElementById('cvc').addEventListener('input', enablePayButton);
        document.getElementById('name-on-card').addEventListener('input', enablePayButton);
      
      
        function submitPayment() {

            event.preventDefault();
            
          const cardNumber = document.getElementById('card-number').value;
          const expiryDate = document.getElementById('expiry-date').value;
          const cvc = document.getElementById('cvc').value;
          const nameOnCard = document.getElementById('name-on-card').value;
      
         
          if (!cardNumber || !expiryDate || !cvc || !nameOnCard) {
            alert('Please fill out all fields before proceeding.');
            return;
          }
      
         
          const paymentInfo = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvc: cvc,
            nameOnCard: nameOnCard
          };
      
        
          localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
      
        
          window.location.href = 'confirm.html';
        }
      
       
        document.getElementById('pay-button').addEventListener('click', submitPayment);
      };
      
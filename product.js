document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      const productName = productCard.querySelector('.product-title').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      
  
      alert(`Added to cart: ${productName} - ${productPrice}`);
     
    });
  });
});
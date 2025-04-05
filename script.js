const counterElement = document.getElementById('counter'); 
const incrementButton = document.getElementById('increment'); 
const decrementButton = document.getElementById('decrement'); 
 
let count = 5; 
 
incrementButton.addEventListener('click', () => { 
    count++; 
    counterElement.textContent = count; 
}); 
 
decrementButton.addEventListener('click', () => { 
    count--; 
    counterElement.textContent = count; 
});
// ------ SELECTED PIZZA ----- //


//function for selected pizza
const selectedPizza = () => {
  if (document.getElementById("vegetarian").checked) {
    return ("Vegatarian pizza");
  }
  else if (document.getElementById("pepperoni").checked) {
    return ("Pepperoni pizza");
  }
  else if (document.getElementById("hawaiian").checked) {
    return ("Hawaiian pizza");
  }
  else {
    return false;
  }
}


// ------ AMOUNT OF PIZZAS ----- //


//function for amount of pizzas, parseInt turns a string into an int
const orderQuantity = () => {
  const amount = parseInt(document.getElementById("amount").value);
  return amount;
}



// ----- TOTAL PRICE ------ //


const pizzaPrice = 80

//function that calculates the total price
const orderTotal = (amount) => {
  return pizzaPrice * amount;
}


// ------ TOTAL TIME ----- //


//function that calculates the cooking time
const cookingTime = (amount) => {
  if (amount < 3) {
    return (10);
  }
  else if (amount < 6) {
    return (15);
  }
  else {
    return (20);
  }
}



// ------- SUBMIT AN ORDER ----- //

// Function for form validation
const validateForm = () => {
  const menu = document.forms["myForm"]["pizza"].value;
  const amount = document.forms["myForm"]["amount"].value;
  const orderName = selectedPizza();
  if (menu == "") {
    document.getElementById("bubble").innerHTML = "Oh no, pizza bot is confused because something is missing. Please let me know what pizza you fancy today!";
    document.getElementById("modalBot").src = "errorbot.png";
    return false;
  }
  else if (amount == "") {
    document.getElementById("bubble").innerHTML = `Oh no, pizza bot is confused because something is missing. Please fill in how many of ${orderName} you want!`;
    document.getElementById("modalBot").src = "errorbot.png";
    return false;
  }
  else {
    placeOrder();
  }
}

// Function for submit button
const placeOrder = () => {
  var orderName = selectedPizza();
  var amount = orderQuantity();
  var totalPrice = orderTotal(amount);
  var totaltime = cookingTime(amount);
  document.getElementById("bubble").innerHTML = `Wohoo, pizza time! I'll get started on your ${orderName}. The order will cost ${totalPrice} kronor and will only take ${totaltime} minutes.`;
  document.getElementById("modalBot").src = "lovebot.png";
}

/* ----- MODAL BOX ----- */

// Get modal element
const modal = document.getElementById("simpleModal");

// Get open modal button
const modalBtn = document.getElementById("modalBtn");

// Get close button
const closeBtn = document.getElementById("closeBtn");

// Listen for open click and open touch (on mobile devices)
modalBtn.addEventListener("click", openModal);
modalBtn.addEventListener("touchstart", openModal);

// Listen for close click and close touch (on mobile devices)
closeBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("touchstart", closeModal);

// Listen for outside click and outside touch (on mobile devices)
window.addEventListener("click", outsideClick);
window.addEventListener("touchstart", outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal if outside click/touch
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}







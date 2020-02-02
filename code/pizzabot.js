/*
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

console.log(vegetarian);
console.log(hawaiian);
console.log(pepperoni);
console.log(pizzaPrice);
*/

// Iteration 2

/*
alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni);
*/

// Iteration 3

/*
const orderName = prompt("Enter the name of the pizza you want to order today.");
const orderQuantity = prompt("How many of " + orderName + " do you want?");

console.log(orderName);
console.log(orderQuantity);
*/

// // Iteration 4

/*
const orderTotal = pizzaPrice * orderQuantity;
alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr");
*/

// Iteration 5

/*
const orderName = prompt("Enter the name of the pizza you want to order today.");


if (orderName == vegetarian) {
  const orderQuantity = prompt("How many of " + orderName + " do you want?");
  if (orderQuantity < 3) {
    alert("The pizzas will take 10 minutes.");
  }
  else if (orderQuantity < 6) {
    alert("The pizzas will take 15 minutes.");
  }
  else {
    alert("The pizzas will take 20 minutes.");
  }

  const orderTotal = pizzaPrice * orderQuantity;
  alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr");

}
else if (orderName == hawaiian) {
  const orderQuantity = prompt("How many of " + orderName + " do you want?");

  if (orderQuantity < 3) {
    alert("The pizzas will take 10 minutes.");
  }
  else if (orderQuantity < 6) {
    alert("The pizzas will take 15 minutes.");
  }
  else {
    alert("The pizzas will take 20 minutes.");
  }

  const orderTotal = pizzaPrice * orderQuantity;
  alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr");

}
else if (orderName == pepperoni) {
  const orderQuantity = prompt("How many of " + orderName + " do you want?");

  if (orderQuantity < 3) {
    alert("The pizzas will take 10 minutes.");
  }
  else if (orderQuantity < 6) {
    alert("The pizzas will take 15 minutes.");
  }
  else {
    alert("The pizzas will take 20 minutes.");
  }

  const orderTotal = pizzaPrice * orderQuantity;
  alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr");

}
else {
  alert("Select a pizza from the menu");
}
*/

// Iteration 6

/*

const vegetarian = "Vegetarian Pizza"
const hawaiian = "hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Welcome message
alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni);

//Variable for orderName
const orderName = prompt("Enter the name of the pizza you want to order today.");

//Function to compare input with available pizzas
const checkOrderName = (orderName) => {
  if (orderName == vegetarian || orderName == hawaiian || orderName == pepperoni) {
    return true;
  }
  else {
    return false;
  }
}

const orderResult = checkOrderName(orderName);

const order = (orderResult) => {
  if (orderResult === true) {

    //ask the user for an amount and store it in a variable
    const orderQuantity = prompt("How many of " + orderName + " do you want?");

    //function that calculates the total price
    const orderTotal = (orderQuantity) => {
      return pizzaPrice * orderQuantity;
    }

    //invoking the function
    const totalPrice = orderTotal(orderQuantity);

    //function that calculates the cooking time
    const cookingTime = (orderQuantity) => {
      if (orderQuantity < 3) {
        return (10);
      }
      else if (orderQuantity < 6) {
        return (15);
      }
      else {
        return (20);
      }
    }

    //invoking the function
    const totaltime = cookingTime(orderQuantity);

    //final alert
    alert(`Great, I'll get started on your ${orderName} right away. It will cost ${totalPrice} kronor. The pizzas will take ${totaltime} minutes.`);

  } else {
    alert("Select a pizza from the menu");
  }
}

order(orderResult);

*/

// Iteration 7


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


// function for submit button
const placeOrder = () => {
  var orderName = selectedPizza();
  var amount = orderQuantity();
  var totalPrice = orderTotal(amount);
  var totaltime = cookingTime(amount);
  document.getElementById("bubble").innerHTML = `Great, I'll get started on your ${orderName} right away. It will cost ${totalPrice} kronor. The pizzas will take ${totaltime} minutes.`;
}






 let foodNames = [
  "Broccoli",
  "Doritos",
  "Milk",
  "Black Beans",
  "Steak",
  "Tortilla",
  "Ice Cream"
];

let calorieCount = [
  50,
  150,
  103,
  114,
  679,
  62,
  137,
];

let foodImages = [
  "broccolipic.png",
  "doritospic.png",
  "milk.png",
  "beans.png",
  "steak.png",
  "tortilla.png",
  "icecream.png"
];

let expirationDays = [
  5,
  90,
  7,
  365,
  4,
  7,
  80
];

let types = [
  "produce and snacks",
  "produce and snacks",
  "dairy and dessert",
  "produce and snacks",
  "meat and carbs",
  "meat and carbs",
  "dairy and dessert"
];


document.getElementById("foodNames").innerHTML = foodNames;
document.getElementById("foodImages").src = foodImages;
document.getElementById("calorieCount").innerHTML = calorieCount;
document.getElementById("expirationDays").innerHTML = expirationDays;
document.getElementById("types").innerHTML = types;
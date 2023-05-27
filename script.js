'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  workingHours: {
    wed: {
      open: 10,
      close: 23
    },
    fri: {
      open: 10,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    },
    sun: {
      open: 12,
      close: 23
    }
  },
  orderFood: function (appetizerIndex, mainMenuIndex) { 
  return `${this.appetizers[appetizerIndex]} and ${this.mainMenu[mainMenuIndex]}`

 
},

foodDelivery: function ({appetizersIndex, mainMenuIndex, address, time}) {
  console.log(`Order received! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`);
},
orderSushi: function (ing1, ing2, ing3) {
  console.log(`Here is your delicious sushi with ${ing1}, ${ing2}, ${ing3}`);
},

orderRamen: function (noodle, ...otherIngredients) {
  console.log(`Here is your delicious ramen with ${noodle}, ${otherIngredients}`);
}

}

japaneseRestaurant.foodDelivery({
  appetizersIndex: 1,
  mainMenuIndex: 2,
  address: '100 Markham Woods Rd, Longwood, USA',
  time: '20:00'
});
//Destructuring Objects
// const {workingHours: hours, name: restaurantName, location: restaurantLocation, categories } = japaneseRestaurant; 

// console.log(hours, restaurantName, restaurantLocation, categories);

//Default values
// const {menu=[], appetizers: starterMenu=[]} = japaneseRestaurant;
// console.log('menu: ', menu, ' starter menu: ', starterMenu);

//Mutating variables
// let x = 3;
// let y = 5;

// const obj = {x: 11, y: 22, z: 33};
// ({x, y} = obj);
// console.log(x, y);

//Nested objects
// const {sun: {open:openHours, close:closeHours}} = hours;
// console.log(openHours, closeHours);

// //Destructuring Arrays
// const array = [1, 2, [7, 9]];

// function getSeven(array) {
//   return array[2][0];
// }

// function destructorizationArray(array) { 
//   const [first,  , [third]] = array;
//   return third;
//  }

// console.log(destructorizationArray(array));

console.log(...japaneseRestaurant.categories);


// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// japaneseRestaurant.orderSushi(...ingredients);

// const newJapaneseRestaurant = {foundedIn: 1998, ...japaneseRestaurant, founder: 'Hiroshi'};
// console.log(newJapaneseRestaurant);

// const japaneseRestaurantCopy = {...japaneseRestaurant};
// japaneseRestaurantCopy.name = 'Banzai 2';
// console.log(japaneseRestaurantCopy.name);
// console.log(japaneseRestaurant.name);

//Rest pattern with arrays
// const [sewead, , edamami, ...otherAppetizers] = [...japaneseRestaurant.appetizers];


// console.log(sewead, edamami, otherAppetizers);


//Rest pattern with objects

// const {sun, sat, ...weekdays} = japaneseRestaurant.workingHours;
// console.log(sun, sat, weekdays);

//Rest pattern with functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) 
    sum += numbers[i];
  console.log(sum);
};

// add(2, 3);
// add(5, 3, 7, 2);

// const numbers = [2, 3, 5, 7, 2];
// add(...numbers);


japaneseRestaurant.orderRamen('Ramen', 'noodles', 'egg', 'mushrooms', 'spinach');


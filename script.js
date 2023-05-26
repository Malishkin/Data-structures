'use strict';

const japaneseRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  workingHorurs: {
    wed: {
      open: 10,
      close: 23
    },
    fri: {
      open: 10,
      close: 23
    },
    sun: {
      open: 12,
      close: 23
    }
  },
  orderFood: function (appetizerIndex, mainMenuIndex) { 
  return `${this.appetizers[appetizerIndex]} and ${this.mainMenu[mainMenuIndex]}`
},

}
//Destructuring Objects
function getRestaurantName(restaurant) {
   return restaurant.name;  
}
//Destructuring Arrays
// const array = [1, 2, [7, 9]];

// function getSeven(array) {
//   return array[2][0];
// }

// function destructorizationArray(array) { 
//   const [first,  , [third]] = array;
//   return third;
//  }

// console.log(destructorizationArray(array));



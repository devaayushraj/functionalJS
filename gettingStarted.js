// 1. create a meal object for a snack
// print both the snacks description
// and calories to the console
const meal = {
  description: "Breakfast",
  calories: 100,
};
console.log(meal.description, meal.calories);

/*
   2. create a new constant named 
   updatedCalories, setting it to 150
   plus the calories used in the above
   meal object.
   Print the value of updatedCalories 
   to the console.
   
   Note: use the dot notation syntax as
   part of the expression
*/
const updatedCalories = 150 + meal.calories;
console.log(updatedCalories);

// Array []

const meal = [
  {
    description: "Breakfast",
    calories: 100,
  },
  {
    description: "Lunch",
    calories: 200,
  },
];

//functions

function hello(som) {
  console.log(som);
}

hello("My name is somnath");
(function closure(params) {})();

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const array=[1, 2, 3, 4, 5];
console.log(array)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const inf = {
    firstname: "Armando",
    surname: "Hernandez",
    email: 'armndohernandez@gmail.com',
    age: "28 years old",
    DriverLicense: false,
}

console.log(inf)
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving licens*/

 inf.DriverLicense = true;
 
 console.log(inf)
 /* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete inf.age;

console.log(inf)
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/


const inf2 = Object.assign({},inf)
inf2.firstname ="Leon";
inf2.surname ='Lopez';
inf2.email = 'leonpez@gmail.com';

console.log(inf2)
console.log(inf !== inf2)


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let shop = 30;
let shipping = 10;
let total = shop >=50 ? shop : shop + shipping;

console.log(total);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let shopBlack = 70;
let shopBlackDisc = shopBlack * .80;
let shippingBlack = 10;
let totalBlack = shopBlackDisc >= 50 ? shopBlackDisc : shopBlackDisc + shippingBlack;

console.log(totalBlack);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
    Brand: "Audi",
    Model: "a3",
    LicensePlate: '666808',
}
console.log(car);

const car1 = Object.assign({},car);
car1.LicensePlate = '888777';
console.log(car1);
const car2 = Object.assign({}, car);
car2.LicensePlate = "555888";
console.log(car2);
const car3 = Object.assign({}, car);
car3.LicensePlate = "000798";
console.log(car3);
const car4 = Object.assign({}, car);
car4.LicensePlate = "812345";
console.log(car4);
const car5 = Object.assign({}, car);
car5.LicensePlate = "154879";
console.log(car5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car, car1, car2, car3, car4, car5];
console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = []
carsForSale.push(car2,car3,car4);
console.log(carsForSale);

const totalCars = carsForSale.length + carsForRent.length;
console.log('Total of cars present' + totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i <carsForSale.length; i++){
    console.log(carsForSale[1].Brand)
    console.log(carsForSale[1].LicensePlate);
    console.log(carsForSale[1].Model);
}


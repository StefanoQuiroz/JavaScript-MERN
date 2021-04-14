//Problema # 1
/*
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes

//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //name is not defined
console.log(otherName); //Elon
//Problema 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword);//undefined

//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first, second, third); // 2 5 2
console.log(first == second); //2 == 5 false
console.log(first == third); // 2 == 2 true
*/
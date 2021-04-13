// console.log(examples);
// var example = "I´m the example!";
//undefined

//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example);
// example = "I'm the example!";

// Syntaxis ES6


//elevation allowed first by declaring the variable
// let example;
// console.log(example);
// example = "I'm the example!";

//elevation not allowed with let
// console.log(example);
// let example = "I'm the example!";

/////////////////////////////////////////////////////////////
//1
// console.log(hello);
// // undefined
// var hello = "world"
/////////////////////////////////////////////////////////////
//2
// var needle = 'haystack';
// test();
// //function(){} different to var test = function(){}
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// magnet
/////////////////////////////////////////////////////////////
//3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// // super cool / there is no function call
/////////////////////////////////////////////////////////////
//4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     //initialize food with half-chicken
//     food = 'half-chicken';
//     console.log(food);
//     //declares tha variable and initialize 
//     var food = 'gone';
// }
// //chicken
// //half-chicken
/////////////////////////////////////////////////////////////
//5
// mean();
// console.log(food);
// var mean = function(){
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// //error
/////////////////////////////////////////////////////////////
//6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind(){
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// //undefined
// //rock
// //r&b
// //disco
/////////////////////////////////////////////////////////////
//7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn(){
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// // san jose
// // seattle
// // burbank
// // san jose
/////////////////////////////////////////////////////////////
//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo (name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }else if (dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//{name : chicago, students : 65, hiring : true}
//error for second assignment for const in else if dojo = {name : chicago, students: 0} => dojo = "closed for now" => error. With Let is different "closed for now"




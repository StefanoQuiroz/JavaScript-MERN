// let canAfford = (itemPrince, accountBalance) =>{
//     if(itemPrince > accountBalance){
//         return `Cannot afford! You are $${itemPrince-accountBalance} short`
//     } else {
//         return `Can afford`
//     }
// }

let canAfford = (itemPrice, accountBalance) =>{
    //Siempre colocar el return delante
    return itemPrice > accountBalance ? `Cannot afford! You are $${itemPrice-accountBalance} short` : `Can afford`;
}
//console.log(canAfford(52, 30));
let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

// Prohibido hacer condicion anidada -------> condicion ? condion ? true : false  : false
const myVar = 20<20 ? 20<20 ? true : false : false;
console.log(myVar);
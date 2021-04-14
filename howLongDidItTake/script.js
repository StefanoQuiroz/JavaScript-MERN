Number.prototype.isPrime = function() {
    //0 -> 100 === 0-> 10000
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${(performance.now() - start)/1000} seconds to run`);
/*

const { performance } = require('perf_hooks');
const start = performance.now();
//Recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(`${rFib(3)} `);
console.log(`in time: ${performance.now() - start}`);
// 0  1 1 2 3 5 8
//Iterative
//Iterative
function iFib(n){
    const vals = [0,1];
    while(vals.length-1 < n){ //0 1 next
        let len = vals.length;
        vals.push(vals[len-1] + vals[len-2]); // sum previous numbers and add to array // 0  1 1 2 3 5 8
    }
    return vals[n];
}
console.log(`${iFib(3)} `);
console.log(`in time: ${performance.now() - start}`);

//Invert a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`in time: ${performance.now() - start}`);
//Loop 

const reverse = (story2)=> [...story2].reverse().join('');

const story2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
console.log(reverse (story2));
console.log(`in time: ${performance.now() - start}`);
*/


// for(let i = 1; i <=5 ; i++){
//     for(let j  = 1; j <= 5 ; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// };

// console.log("\n");

// for (let i = 5; i >=1; i--) {


//     for (let j = 1; j >= i; j--) {
//         document.write("*");
//     }


//     for(let s = 1; s <= 5 - i; s++){
//         document.write("*")
//     }
//     document.write("<br>"); 
// }


// // for(let k = 5; k >= 1; k--){
// //     for(let l = 1 ; l <= k; l++){
// //         document.write("*");
// //     }
// //     document.write("<br>")
// // }

// // for(let k = 5; k >= 1; k--){
// //     for(let l = 1; l <= k; l++){
// //         document.write("*");
// //     }
// //     document.write("<br>");
// // }


// let total = 0;
// for(let i = 1; i <= 100; i++ ){

//     total += i ;
// }
// console.log(total);
// Prime numbers between 1 and 100

// let start_no = parseInt(prompt("Enter your start number : "));
// let end_no = parseInt(prompt("Enter your end number : "));

// for (let num = start_no; num <= end_no; num++) {
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(` is prime number : ${num}`);
//     }
// }















// let start = parseInt(prompt("enter yoyr start number : "));
// let end = parseInt(prompt("enter yoyr end number : "));

// for(let p = start; p <= end ; p++){
//     let prime = true;
//     for( let i = 2; i <= Math.sqrt(p); i++){

//         if (p % i === 0){
//             prime = false;
//             break;
//         }
//     }
//         if( prime ){
//             document.write(`is prime number : ${p}`)
//         }
// }
























let start = parseInt(prompt(`Enter your first number : `));
let End = parseInt(prompt(`Enter your end number : `));

for(let s = start; s <= End;s++){

    let prime = true;

    for(let i = 2; i <= Math.sqrt(s); i++){
        
        if (s % i === 0){

            prime = false;

            break;

        }

    }

    if(prime){
        console.log(`Is Prime Number : ${s}`)
    }
}







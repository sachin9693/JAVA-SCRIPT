// for(let i = 2 ;i <= 100 ; i++){
//     console.log( `table ${i} `);

//     for(let a = 1 ; a <= 10 ; a++){
//         console.log(`${i} × ${a} = ${i*a}`);
//     }
// }


let num = parseInt(prompt("Enter your number : "));

if(num % 2 == 0){
    console.log(`${num} is prime number`);
}else{
    console.log(`${num} is not prime number `)
}

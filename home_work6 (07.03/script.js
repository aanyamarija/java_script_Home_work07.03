 //1

/*function min( firstNum , secondNum) {
    if ( firstNum < secondNum) {
        return firstNum
    } else if (secondNum > firstNum) {
        return secondNum
    } else {
        return firstNum
    }
}

console.log(min(1,2))
console.log(min(2,1))
console.log(min(2,2))
*/


//2

/*function printEvenNumbers (firstNum, secondNum) {
let maxNumber = 0; 
let minNumber = 0;

if ( firstNum > secondNum) {
    maxNumber = firstNum
    minNumber = secondNum
}
else if ( firstNum < secondNum) {
    maxNumber = secondNum
    minNumber = firstNum
}
else {
    console.log( "Оба числа равны")
    return
}

for( let i = maxNumber; i >= minNumber; i--) {
    if ( i %2 == 0 ) {
        console.log( i )
    }
}
}

printEvenNumbers ( 10,20) */

//3

 /*function power (firstNum, secondNum = 2) {
    return firstNum**secondNum
 }


console.log(power(4))
console.log(power(2,3))
console.log( power(2,3))
*/

//4

/*function sum (n) {
    let sumOfNumbers = 0;


    for( let i = 1 ; i <= n ; i++) {
        sumOfNumbers += i 

    }
    return sumOfNumbers
}

console.log( sum(3));
console.log( sum(150));
*/

// sumOfNumbers = sumOfNumbers + i  ---- oder sumOfNumbers +=

//5


/*function sumOfOddAndEvenNums (n,m) {

    let sumOfOdds = 0;
    let sumOfEvens = 0;

    for(let i = n; i <= m; i++) {
        if ( i %2 === 0 ) {
            sumOfEvens += i 
        }
        else {
            sumOfOdds += i
        }

    }

    console.log (sumOfEvens);
    console.log( sumOfOdds);
}

sumOfOddAndEvenNums (1,19)
*/

//6

function getString (arr) {

    if ( arr.length === 0 ) {
        return null 
    }

     let maxStr = arr[0];
     for( let i = 0; i < arr.length; i++) {
         if( maxStr.length > arr[i].length) {

             maxStr = arr[i]
         }
        
     }

     console.log(maxStr)
}

getString( ["one","two","three", "qwert"])


/*function getString(arr) {
    if(arr.length === 0) {
        return null
    }

    let maxStr = arr[0]; // "one", 'three'
    for (let index = 0; index < arr.length; index++) { // 'one', ...., 'three' 5, 'qwert'
        if (maxStr.length < arr[index].length) { // 3 < 5, 5 < 5
            maxStr = arr[index] // maxStr = 'three'
        }
    }

    console.log(maxStr)
}

getString(['one', 'two', 'three', 'qwert', 'qwerty', 'kjhgfd']) */
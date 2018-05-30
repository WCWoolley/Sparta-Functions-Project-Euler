// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
// function convertArrayToAnObject (arr) {
//   var obj = {}
//   for (var i = 0; i < arr.length; i++) {
//     obj.window[`${arr[i]}`] = `${arr[i+1]}`;
//   }
//   return obj;
// }

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
// function fizzBuzz (num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return num = `FizzBuzz`;
//   } else if (num % 5 === 0) {
//     return num = `Buzz`;
//   } else if (num % 3 === 0) {
//     return num = `Fizz`;
//   } else {
//     return num;
//   }
// }
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".




// Project Euler Problem One

var num = [];

for ( var i = 1 ; i < 1000 ; i++ ) {
  if(i % 3 === 0) {
    num.push(i);
  } else if (i % 5 === 0) {
    num.push(i);
  }
}

var sum = num.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);

// Project Euler Problem Two

var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

var sum2 = fibonacci_series(33);

for (var i = 0; i < sum2.length; i++) {
    while (sum2[i] % 2 ) {
        sum2.splice(i, 1);
    }
  }

var sum3 = sum2.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum3);

// Project Euler Problem three

function largestPrimeFactor(n){
var i=2;
while (i<=n){
    if (n%i == 0){
        n/=i;
    }else{
        i++;
    }
}
console.log(i);
}
var a = 600851475143;
largestPrimeFactor(a)


//JS Hoisting
hoistedFunction();

function hoistedFunction() {
    console.log('This will still display even though the function is called before it is declared')
}

console.log(a);

var a = 2

// JS Closure
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

const myCounter = makeCounter();
myCounter()
myCounter()
myCounter()
myCounter()
myCounter()

console.log(myCounter());

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
     return counter}
})();

add();
add();
add();

console.log(add());

// var let const
    //Displays teh final result by logging after the loop
    function doSomething() {
        for (let i = 0; i < 10; i++) {
            var countTo9 = i;
        }
        console.log(countTo9);
    }
    doSomething();

    //Displays the entire count by logging inside the loop
    // function doSomething() {
    //     for (let i = 0; i < 10; i++) {
    //         var countTo9 = i;
    //         console.log(countTo9);
    //     }
    // }
    // doSomething();

        // Wont Work due to blocked scope of let and const
        // function doSomething() {
        //     for (let i = 0; i < 10; i++) {
        //         let countTo9 = i;
        //     }
        //     console.log(countTo9);
        // }
        // doSomething();
    
        // function doSomething() {
        //     for (let i = 0; i < 10; i++) {
        //         const countTo9 = i;
        //     }
        //     console.log(countTo9);
        // }
        // doSomething();
// Using Loop

function everyThing(array, test) {
          for (let element of array) {
            if (!test(element)) {  // If any element fails the test, return false
              return false;
            }
          }
          return true;  // If all elements pass, return true
        }
        
        // Test cases
        console.log(everyThing([10, 15, 20,], n => n < 30)); // → true
        console.log(everyThing([5, 10, 15, 25], n => n < 30)); // → false
        console.log(everyThing([10, 15, 20, 25, 30], n => n < 30)); // → true
        

// Using some

function everyThing(array, test) {
          return !array.some(element => !test(element));  // Return true if no element fails the test
        }
        
        // Test cases
        console.log(everyThing([10, 15, 20,], n => n < 30)); // → true
        console.log(everyThing([5, 10, 15, 25], n => n < 30)); // → false
        console.log(everyThing([10, 15, 20, 25, 30], n => n < 30)); // → true
        
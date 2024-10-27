function loop(value, test, update, body) {
  while (test(value)) {
    // Test the current value, stop if false
    body(value); // Execute the body function with the current value
    value = update(value); // Update the value for the next iteration
  }
}
function newLoop(value, test, update, body) {
  while (test(value)) {
    // Test the current value, stop if false
    body(value); // Execute the body function with the current value
    value = update(value); // Update the value for the next iteration
  }
}

// Example usage
loop(
  10,
  (n) => n > 0,
  (n) => n - 2,
  console.log
);

newLoop(
  50,
  (m) => m > 0,
  (m) => m - 5,
  console.log
);

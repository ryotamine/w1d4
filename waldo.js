// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // loops array [0, 1, 2, 3]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

// change output to "Found Waldo at index 2!"
function actionWhenFound(yes) {
  console.log("Found Waldo at index " + yes + "!");
}

// findWaldo ([0, 1, 2, 3], actionWhenFound)
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
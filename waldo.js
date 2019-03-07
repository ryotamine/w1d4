function findWaldo(arr, found) {
  arr.forEach(function(item) {
    if (found(item)) {
      console.log('waldo is at ' + arr.indexOf(found(item)))
    }
  })
}

function actionWhenFound(i) {
 if (i === "Waldo") {
   return i }
   else {
     return false
   }
       ;   // execute callback
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
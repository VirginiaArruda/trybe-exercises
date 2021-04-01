function returnNumber(array) {
  let repetition = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === repetition)  {
      repetition += 1 }
  } 
  return repetition;   

}

console.log(returnNumber([2, 3, 2, 5, 8, 2, 3]))
function indiceMenorValor(array) { 
  
  let menor = 100;
  let idx = 0;

  for (let index = 0; index < array.length; index +=1) {
    if (array[index] < menor) {
      menor = array[index];
      idx = index;
    }
    
  }  
   
  return idx;
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]))
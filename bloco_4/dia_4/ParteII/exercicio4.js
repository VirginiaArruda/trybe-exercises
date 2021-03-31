function verificaMaiorNome(array) {
  let maior = 0;
  let nome = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maior) {
      maior = array[index].length
      nome = array[index]
    } 
  }

  return nome;
}

console.log(verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
function verificaFimPalavra(param1, param2) {
  let inversoParam1 = param1.split('').reverse().join('');
  let inversoParam2 = param2.split('').reverse().join('');

  for (let index = 0; index < param2.length; index += 1) {
    if (inversoParam1[index] === inversoParam2[index]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(verificaFimPalavra('joaofernando', 'fernan'));
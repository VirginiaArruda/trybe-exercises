function verificaPalindromo(string) {
  let concatenaLetras = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    concatenaLetras += string[index];
  }
  if (concatenaLetras === string) {
    return true;
  } else {
    return false;
  }
  
}

console.log(verificaPalindromo('desenvolvimento'));
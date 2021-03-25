let a = 60;
let b = 60;
let c = 60;

let soma = a + b + c;
let anguloPositivo = a > 0 && b > 0 && c > 0;

if(anguloPositivo){
    if (soma === 180) {
        console.log("true");   
    } else {
        console.log("false");
    }
} else {
    console.log("erro");
}
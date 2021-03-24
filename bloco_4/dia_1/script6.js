let peçaXadrez = "REI";

switch (peçaXadrez.toLowerCase()) {
    case "rei":
        console.log("Uma casa para qualquer direção");
        break;
    case "rainha":
        console.log("Vertical, Horizontal e Diagonal");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "torre":
        console.log("Vertical e Horizontal");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "peão":
        console.log("Apenas uma casa para frente");
        break;
    default:
        console.log("erro");
}
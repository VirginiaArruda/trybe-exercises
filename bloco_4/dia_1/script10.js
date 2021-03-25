let custoProduto = 20;
let valorVenda =  30;

if (custoProduto >= 0 && valorVenda >= 0) {
    let totalCustoProduto = custoProduto * 1.2;
    let totalLucro = (valorVenda - totalCustoProduto) * 1000;
    console.log(totalLucro);
} else {
    console.log("erro");
}
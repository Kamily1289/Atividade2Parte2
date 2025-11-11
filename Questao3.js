function filtrarProdutos (produtosJSON){
    const dados = JSON.parse(produtosJSON);
    const produtosAcimaDe50 = dados.produtos.filter(produtos=> produtos.preco>50);
    const produtAcimaDe50 = dados.produtAcimaDe50.map(produtos=> produtos.nome);
    const nomesDosProdutos = prodtAcimaDe50.map(produto=> produto.nome);
    return nomesDosProdutos;
}
const produtosJSON = `{
    "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
    ]
}`;
    
const resultado = filtrarProdutos(produtosJSON);
console.log(resultado);

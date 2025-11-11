// criaçao da funçao
function formatEdereco (endereco){
    return`${endereco.rua}, ${endereco.numero}- ${endereco.cidade}- CEP: ${endereco.cep}`; // o retorno o qual deve sair por está ordem
}
const endereco ={
    rua: "Av. Paulista",
    numero: 1000,
    cidade: "São Paulo",
    cep: "01310-100"
};
const resultado = formatEdereco(endereco); // chamou a funçao definida acima
console.log(resultado); //saída

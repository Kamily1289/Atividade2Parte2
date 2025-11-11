const user = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
};
// Converte o objeto Java Script para a String JSON.
const JsonString = JSON.stringify(user);
console.log(JsonString);
// recuperar para o objeto original. 
const ObjetoRecuperado = JSON.parse(JsonString);
console.log(ObjetoRecuperado); // saída.

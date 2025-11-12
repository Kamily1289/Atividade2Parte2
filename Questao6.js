function parseJSONSafe(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error("Erro no JSON:", error.message);
    return null;
  }
}

const jsonInvalidoString = '{ "nome": "João", "idade": 36 }'; 
console.log(parseJSONSafe(jsonInvalidoString));


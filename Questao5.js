const pedidosJSON = `{
    "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
    ]
}`;
function processarPedidos(dados){
    let entregas =0;
    let processamento= 0;
    let ValorTotal = 0;

for (const pedido of pedido){
    totalValue += pedido.total;
    if(pedido.status === "entregues"){
        entreguesCount++;
    }
}
const formattedTotal = totalValue.toFixed(2)replace('-','-');
    return `${entreguesConst} pedidos entrgues,$ {processarPedidosCount} em processamento.Valorz
total: ${formattedTotal}`;

const resultado = processarPedidos(pedidoJSON);
    console.log(resultado);

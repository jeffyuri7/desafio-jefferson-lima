import Pedido from './pedido.js';

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            const pedido = new Pedido(metodoDePagamento, itens);
            const valor = pedido.calcularPedido();
            return valor;
        } catch (erro) {
            return erro.message;
        }
    }

}
let caixa = new CaixaDaLanchonete();
let itens = ['cafe,1', 'chantily,3']
let resultado = caixa.calcularValorDaCompra("credito", itens);
console.log(typeof (resultado))
console.log(resultado);

export { CaixaDaLanchonete };

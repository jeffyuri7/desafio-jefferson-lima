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

export { CaixaDaLanchonete };

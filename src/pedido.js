import Cardapio from './cardapio.js';
import Pagamento from './pagamento.js';
import FaltaDePedidoExtraError from './erros/falta-pedido-extra-error.js';

// Cria um novo pedido.
class Pedido {
  constructor(metodoDePagamento, itens) {
    this.cardapio = new Cardapio();
    this.metodoDePagamento = Pagamento.metodoPagamentoValido(metodoDePagamento);
    this.itens = itens;
    this.valor = null;
  }

  // Implementa a lógica de cálculo do pedido.
  validaItens() {
    let listaItensPedido = [];
    let listaFinal = [];
    let itensPedido = this.itens;
    let listaDeItens = this.cardapio.itens;
    // Transforma os itens em um array.
    itensPedido.forEach(function (item) {
      let codigo = item.split(",");
      listaItensPedido.push(codigo)
    });
    // Compara os itens do pedido com o cardápio
    listaItensPedido.forEach(function (item) {
      listaDeItens.forEach(function (itemDoCardapio) {
        if (item[0] === itemDoCardapio[0]) {
          if (itemDoCardapio[3]) {
            if (!(listaItensPedido.find(cod => cod[0] === itemDoCardapio[3]))) {
              throw new FaltaDePedidoExtraError("Item extra não pode ser pedido sem o principal");
            }
          }
          listaFinal.push(itemDoCardapio);
        }
      });
    });
  }

  // Valida os itens do pedido
  calculaPedido() {
    validaItens();
  }
}

export default Pedido;

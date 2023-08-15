import Cardapio from './cardapio.js';
import Pagamento from './pagamento.js';
import FaltaDePedidoExtraError from './erros/falta-pedido-extra-error.js';
import QuantidadeInvalidaError from './erros/quantidade-error.js';

// Cria um novo pedido.
class Pedido {
  constructor(metodoDePagamento, itens) {
    this.cardapio = new Cardapio();
    this.metodoDePagamento = Pagamento.metodoPagamentoValido(metodoDePagamento);
    this.itens = itens;
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
    // TODO Lógica de conferência se o item é válido.
    listaItensPedido.forEach(function (item) {
      listaDeItens.forEach(function (itemDoCardapio) {
        if (item[1] == 0) {
          throw new QuantidadeInvalidaError("Quantidade inválida!");
        }
        if (item[0] === itemDoCardapio[0]) {
          if (itemDoCardapio[3]) {
            if (!(listaItensPedido.find(cod => cod[0] === itemDoCardapio[3]))) {
              throw new FaltaDePedidoExtraError("Item extra não pode ser pedido sem o principal");
            }
          }
          let itemListaFinal = Array.from(itemDoCardapio);
          itemListaFinal.unshift(item[1]);
          listaFinal.push(itemListaFinal);
        }
      });
    });
    return listaFinal;
  }

  // Valida os itens do pedido
  calcularPedido() {
    let total = 0;
    let listaFinal = this.validaItens();
    let aliquota = this.metodoDePagamento.aliquota;
    console.log(aliquota)
    console.log(listaFinal)
    listaFinal.forEach(function (item) {
      let valor = Number(item[0]) * Number(item[3]) * aliquota;
      total += valor;
    });
    return "R$ " + Number.parseFloat(total).toFixed(2).replace(".", ",");
  }
}

export default Pedido;

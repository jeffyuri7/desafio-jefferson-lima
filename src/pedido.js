import Cardapio from './cardapio.js';
import Pagamento from './pagamento.js';
import FaltaDePedidoExtraError from './erros/falta-pedido-extra-error.js';
import QuantidadeInvalidaError from './erros/quantidade-error.js';
import FaltaItensCarrinhoError from './erros/falta-itens-error.js';
import ItemInvalidoError from './erros/item-invalido.js';

// Cria um novo pedido.
class Pedido {
  constructor(metodoDePagamento, itens) {
    this.cardapio = new Cardapio();
    this.metodoDePagamento = Pagamento.metodoPagamentoValido(metodoDePagamento);
    this.itens = itens;
  }

  // Faz a validação do pedido.
  validaItens() {
    let listaItensPedido = [];
    let listaFinal = [];
    let itensPedido = this.itens;
    let listaDeItens = this.cardapio.itens;
    let encontrado = false;
    // Verifica se há algum item no pedido.
    if (itensPedido == false) {
      throw new FaltaItensCarrinhoError("Não há itens no carrinho de compra!");
    }
    // Transforma os itens em um array.
    itensPedido.forEach(function (item) {
      let codigo = item.split(",");
      listaItensPedido.push(codigo)
    });
    // Compara as duas listas.
    for (let item of listaItensPedido) {
      encontrado = false;
      for (let itemDoCardapio of listaDeItens) {
        // Verifica se a quantidade do não é nula ou negativa.
        if (item[1] <= 0) {
          throw new QuantidadeInvalidaError("Quantidade inválida!");
        }
        // Compara o item com o cardápio.
        if (item[0] == itemDoCardapio[0]) {
          // Verifica se o item é adicional de outro item principal.
          if (itemDoCardapio[3]) {
            // Se for item adicional, verifica se o item principal está no pedido.
            if (!(listaItensPedido.find(cod => cod[0] === itemDoCardapio[3]))) {
              throw new FaltaDePedidoExtraError("Item extra não pode ser pedido sem o principal");
            }
          }
          let itemListaFinal = Array.from(itemDoCardapio);
          itemListaFinal.unshift(item[1]);
          listaFinal.push(itemListaFinal);
          encontrado = true;
        }
      }
      // Se o item não foi encontrado.
      if (encontrado) {
        continue;
      } else {
        throw new ItemInvalidoError("Item inválido!");
      }
    }
    return listaFinal;
  }

  // Calcula o valor final do pedido
  calcularPedido() {
    let total = 0;
    let listaFinal = this.validaItens();
    let aliquota = this.metodoDePagamento.aliquota;
    listaFinal.forEach(function (item) {
      let valor = Number(item[0]) * Number(item[3]);
      total += valor;
    });
    // Aplica a aliquota dependendo da forma de pagamento.
    total = total * aliquota;
    return "R$ " + Number.parseFloat(total).toFixed(2).replace(".", ",");
  }
}

export default Pedido;

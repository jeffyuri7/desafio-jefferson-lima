// Enumera os tipos de pagamentos aceitos pela lanchonete

import MetodoPagamentoError from './erros/metodo-pagamento.js'

class Pagamento {
  // Cria os tipos de pagamento suportados
  static dinheiro = new Pagamento("dinheiro")
  static credito = new Pagamento("credito")
  static debito = new Pagamento("debito")

  constructor(metodoDePagamento) {
    this.metodoDePagamento = metodoDePagamento
    this.aliquota;
  }

  toString() {
    this.metodoDePagamento + ", " + this.aliquota
  }
  // Verifica se o metodo de pagamento é válido
  static metodoPagamentoValido(metodoDePagamento) {
    const metodos = Object.keys(Pagamento);

    // Itera sobre os métodos válidos.
    for (const metodo of metodos) {
      if (metodoDePagamento == metodo) {
        const metodoValido = this.aliquotaPagamento(metodoDePagamento)
        return metodoValido;
      }
    }
    throw new MetodoPagamentoError("Forma de pagamento inválida!")
  }

  // Calcula a alíquota a ser aplicada na conta.
  static aliquotaPagamento(metodoDePagamento) {
    switch (metodoDePagamento) {
      case "dinheiro":
        Pagamento.dinheiro.aliquota = 0.95;
        return Pagamento.dinheiro;
      case "credito":
        Pagamento.credito.aliquota = 1.03;
        return Pagamento.credito;
      default:
        Pagamento.debito.aliquota = 1;
        return Pagamento.debito;
    }
  }
}

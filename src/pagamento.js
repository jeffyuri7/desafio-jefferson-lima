// Enumera os tipos de pagamentos aceitos pela lanchonete
class Pagamento {
  // Cria os tipos de pagamento suportados
  static dinheiro = new Pagamento("dinheiro")
  static credito = new Pagamento("credito")
  static debito = new Pagamento("debito")

  constructor(metodoDePagamento) {
    this.metodoDePagamento = metodoDePagamento
  }

  // Verifica se o metodo de pagamento é válido
  static metodoPagamentoValido(metodoDePagamento) {
    const metodos = Object.keys(Pagamento);

    // Itera sobre os métodos válidos
    for (const metodo of metodos) {
      if (metodoDePagamento == metodo) {
        return true;
      }
    }
    return false;
  }
}

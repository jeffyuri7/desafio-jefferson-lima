// Uma classe para tratar erros personalizados.
class FaltaItensCarrinhoError extends Error {
  constructor(message) {
    super(message);
    this.name = "FaltaItensCarrinhoError";
  }
}

export default FaltaItensCarrinhoError;

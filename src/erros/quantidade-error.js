// Uma classe para tratar erros personalizados.
class QuantidadeInvalidaError extends Error {
  constructor(message) {
    super(message);
    this.name = "QuantidadeInvalidaError";
  }
}


export default QuantidadeInvalidaError;

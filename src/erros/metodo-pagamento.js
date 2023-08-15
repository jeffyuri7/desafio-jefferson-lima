// Uma classe para tratar erros personalizados.
class MetodoPagamentoError extends Error {
  constructor(message) {
    super(message);
    this.name = "MetodoPagamentoError";
  }
}


export default MetodoPagamentoError;

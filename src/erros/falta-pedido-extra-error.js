class FaltaDePedidoExtraError extends Error {
  constructor(message) {
    super(message);
    this.name = "FaltaDePedidoExtraError";
  }
}


export default FaltaDePedidoExtraError;

// Uma classe para tratar erros personalizados.
class ItemInvalidoError extends Error {
  constructor(message) {
    super(message);
    this.name = "ItemInvalidoError";
  }
}

export default ItemInvalidoError;

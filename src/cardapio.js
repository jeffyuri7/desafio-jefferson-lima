import dados from './itens.json' assert { "type": 'json'};

// Cria uma classe que gera o cardápio.
class Cardapio {
  constructor() {
    this.itens = this.listarItens();
  }

  // Cria uma lista com os itens do cardápio.
  listarItens() {
    const lista = dados.map(function (obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    });
    return lista;
  }
}

export default Cardapio;

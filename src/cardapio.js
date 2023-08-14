import dados from './itens.json' assert { "type": 'json'};

class Cardapio {
  constructor() {
    this.itens = this.listarItens();
  }

  listarItens() {
    const lista = dados.map(function (obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    });
    return lista;
    // return this.dados = dados;
  }
}

export default Cardapio;

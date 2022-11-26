// função para buscar um id no banco de dados
const buscarPorID = (banco, id) =>
  banco.find(banco => {
    return Number(id) === banco.id;
  });

module.exports = buscarPorID;

let carrinho = [];

// clientes
const patricia = { nome: 'Patricia', carrinho: [] };
const carlos = { nome: 'Carlos', carrinho: [] };
const renato = { nome: 'Renato', carrinho: [] };
const jose = { nome: 'José', carrinho };
const roberto = { nome: 'Roberto', carrinho: [] };

// produtos
const tv = { nome: 'TV Samsung 4K', valorEmCentavos: 129900 };
const notebook = { nome: 'Notebook Dell', valorEmCentavos: 399990 };
const mouse = { nome: 'Mouse MX Master 3', valorEmCentavos: 23000 };
const teclado = { nome: 'Teclado Keychron K8', valorEmCentavos: 50000 };
const caboUsb = { nome: 'Cabo USB 2 Metros', valorEmCentavos: 1990 };
const carregador = { nome: 'Carregador portátil', valorEmCentavos: 4590 };
const webcam = { nome: 'Webcam C920s', valorEmCentavos: 80000 };
const monitor = { nome: 'Monitor LG 29 FHD', valorEmCentavos: 129900 };

const clientes = [patricia, carlos, renato, jose, roberto];

for (let cliente of clientes) {
  if (cliente == patricia) {
    cliente.carrinho.push({
      item: teclado,
      quantidade: 1,
    });
    cliente.carrinho.push({
      item: caboUsb,
      quantidade: 2,
    });
    cliente.carrinho.push({
      item: carregador,
      quantidade: 1,
    });
    cliente.carrinho.push({
      item: mouse,
      quantidade: 1,
    });
    cliente.carrinho.push({
      item: monitor,
      quantidade: 1,
    });
  } else if (cliente == carlos) {
    cliente.carrinho.push({
      item: notebook,
      quantidade: 2,
    });
  } else if (cliente == renato) {
    cliente.carrinho.push({
      item: webcam,
      quantidade: 5,
    });
  } else if (cliente == jose) {
    cliente.carrinho.push({
      item: tv,
      quantidade: 1,
    });
    cliente.carrinho.push({
      item: caboUsb,
      quantidade: 2,
    });
    cliente.carrinho.push({
      item: webcam,
      quantidade: 1,
    });
  } else if (cliente == roberto) {
    cliente.carrinho.push({
      item: webcam,
      quantidade: 1,
    });
    cliente.carrinho.push({
      item: caboUsb,
      quantidade: 2,
    });
    cliente.carrinho.push({
      item: monitor,
      quantidade: 1,
    });
  }

  console.log('-=-'.repeat(20));
  console.log(cliente.nome);
  for (let item of cliente.carrinho) {
    console.log(item.item);
    console.log(item.quantidade);
  }
  console.log('-=-'.repeat(20));
}

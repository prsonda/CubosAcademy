// inicializa o carrinho vazio
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

// produtos comprados por cada cliente
const produtosPorClientes = [
  patricia,
  [teclado, caboUsb, caboUsb, carregador, mouse, monitor],
  carlos,
  [notebook, notebook],
  renato,
  [webcam, webcam, webcam, webcam, webcam],
  jose,
  [tv, caboUsb, caboUsb, webcam],
  roberto,
  [webcam, caboUsb, caboUsb, monitor],
];

// percorre o array de podutos comprados por cliente
for (let index = 0; index < produtosPorClientes.length; index++) {
  // verifica se o index é inpar pois é onde estão os produtos comprados no array
  if (index % 2 !== 0) {
    let total = 0;

    // percorre o array de produtos de acordo com a posição do index
    for (let produto of produtosPorClientes[index]) {
      // verifica se o carrinho do cliente está vazio
      if (produtosPorClientes[index - 1].carrinho.length === 0) {
        // adiciona o produto no carrinho se o carrinho estiver vazio
        produtosPorClientes[index - 1].carrinho.push({
          item: produto,
          quantidade: 1,
        });
      }

      // percorre o objeto dentro do carrinho
      for (let i of produtosPorClientes[index - 1].carrinho) {
        i1 = i.item.nome;
        i2 = i;
      }

      // verifica se o nome do produto comprado ainda não esta no carrinho e adiciona
      if (produto.nome !== i1) {
        produtosPorClientes[index - 1].carrinho.push({
          item: produto,
          quantidade: 1,
        });
      } else {
        // caso o produto esteja no carrinho soma a quantidade em 1
        total += 1;
        i2.quantidade = total;
      }
    }

    // faz a apresentação dos clientes e produtos de forma formatada
    console.log('-=-'.repeat(20));
    console.log(produtosPorClientes[index - 1].nome);
    console.log(produtosPorClientes[index - 1].carrinho);
    console.log('-=-'.repeat(20));
  }
}

const cart = {
  clientName: 'Guido Bernal',
  products: [
    {
      id: 1,
      name: 'Camisa',
      quantity: 3,
      unitPrice: 3000,
    },
    {
      id: 2,
      name: 'Bermuda',
      quantity: 2,
      unitPrice: 5000,
    },
  ],
  calculate: function () {
    let sumItems = 0;
    let totalValue = 0;

    for (item of cart.products) {
      if (item.unitPrice) {
        sumItems += item.quantity;
        totalValue += (item.unitPrice * item.quantity) / 100;
      }
    }

    const result = [totalValue, sumItems];
    return result;
  },
  calculaterDiscount: function () {
    let cheaper = 999999999999999;
    let discount = 0;

    for (item of cart.products) {
      if (item.unitPrice < cheaper) {
        cheaper = item.unitPrice;
      }
    }

    if (this.calculate()[0] > 10000 || this.calculate()[1] > 4) {
      const discount1 = this.calculate()[0] * 0.1;
      const discount2 = cheaper;

      if (discount1 > discount2) {
        discount = discount1 / 100;
      } else {
        discount = discount2 / 100;
      }
    }

    return discount;
  },
  totalAPagar: function () {
    const valuePay = (this.calculate()[0] - this.calculaterDiscount()).toFixed(
      2
    );
    return valuePay;
  },
  addproduct: function (product) {
    let found = false;

    for (prod of this.products) {
      let code = prod.id;

      if (product.id === code) {
        found = true;
        prod.quantity += product.quantity;
      }
    }

    if (!found) {
      cart.products.push(product);
    }
  },
  printDetails: function () {
    console.log(`Cliente: ${cart.clientName}`);
    console.log();

    for (item of this.products) {
      console.log(
        `Item ${item.id} - ${item.name} - ${item.quantity} und - R$ ${(
          item.unitPrice / 100
        ).toFixed(2)}`
      );
    }

    console.log();
    console.log(`Total de itens: ${this.calculate()[1]} itens`);
    console.log(
      `Total de desconto: R$ ${this.calculaterDiscount().toFixed(2)}`
    );
    console.log(`Total a pagar: R$ ${this.totalAPagar()}`);
  },
  printSummary: function () {
    console.log(`Cliente: ${cart.clientName}`);
    console.log(`Total de itens: ${this.calculate()[1]} itens`);
    console.log(
      `Total de desconto: R$ ${this.calculaterDiscount().toFixed(2)}`
    );
    console.log(`Total a pagar: R$ ${this.totalAPagar}`);
  },
};

const newBermuda = {
  id: 2,
  name: 'Bermuda',
  quantity: 3,
  unitPrice: 5000,
};

cart.addproduct(newBermuda);

const newTennis = {
  id: 3,
  name: 'Tenis',
  quantity: 1,
  unitPrice: 10000,
};

cart.addproduct(newTennis);
cart.printDetails();

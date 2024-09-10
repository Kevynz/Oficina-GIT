const produtos = [
    { nome: "Sabonete", preco: 3.50 },
    { nome: "Shampoo", preco: 15.00 },
    { nome: "Condicionador", preco: 18.00 },
    { nome: "Pasta de dente", preco: 5.75 }
  ];
  
  // Usando FOR para somar o preço total dos produtos
  let total = 0;
  console.log("Produtos e seus preços:");
  for (let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i].nome}: R$ ${produtos[i].preco}`);
    total += produtos[i].preco;
  }
  
  console.log(`\nPreço total: R$ ${total.toFixed(2)}`);
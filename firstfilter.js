var products = [
    { name: 'Carrot' , type: 'vegetable' },
    { name: 'Orange' , type: 'fruits' },
    { name: 'chilly' , type: 'vegetable' },
    { name: 'banana' , type: 'fruits' }
  ];
  var filteredProducts = [];
  
  for (var i=0; i < products.length; i++){
    if(products[i].type === 'fruits'){
       filteredProducts.push(products[i]);
      }
  }
  
  products.filter(function(product){
    return product.type === 'vegetable';
  });
                  
  console.log(filteredProducts);
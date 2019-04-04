const shoppingBasket = {
  basket: [],
  addProduct(product){
    shoppingBasket.basket.push(product);
  },

  getTotal(){
    let total = 0;
    for (let product of shoppingBasket.basket) {
      total += product.price;
    }
    return total;
  }
};

module.exports = shoppingBasket;

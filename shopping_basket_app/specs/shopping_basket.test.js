const shoppingBasket = require('../shopping_basket');
const products = require('../products');


describe('shopping basket', () => {

  beforeEach(() => {
    shoppingBasket.basket = [];
  })

  test('stsrts with and empty array', () => {
    expect(shoppingBasket.basket.length).toBe(0)
  })
  test('should add the bread product to the basket', () =>{
    // ARRANGE
    // no arranging to do

    // ACT
    shoppingBasket.addProduct(products[0]);
    expect(shoppingBasket.basket)
    .toEqual([{productName: 'bread', price: 0.89 }])
  })

test('basket can add 3 products', () => {

  shoppingBasket.addProduct(products[0]);
  shoppingBasket.addProduct(products[1]);
  shoppingBasket.addProduct(products[2]);

  expect(shoppingBasket.basket.length).toBe(3)
})

test('getTotal amount returns expected value', () => {
    shoppingBasket.addProduct(products[0]);
    shoppingBasket.addProduct(products[1]);
    shoppingBasket.addProduct(products[2]);
    shoppingBasket.addProduct(products[3]);
    expect(shoppingBasket.getTotal()).toBeCloseTo(9.34)

})

});

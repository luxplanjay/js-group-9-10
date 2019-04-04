import Cart from '../cart';

const products = [
  { id: 'id-1', price: 10 },
  { id: 'id-2', price: 20 },
  { id: 'id-3', price: 30 }
];

const initialItems = {
  'id-1': 1,
  'id-2': 2
};

describe('Shopping cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart(initialItems);
  });

  it('should have intial items', () => {
    expect(cart.items).toEqual(initialItems);
  });

  it('should add 1 quantity to existing item', () => {
    cart.add('id-1');

    expect(cart._items['id-1']).toBe(2);
  });

  it('should add item and set it quantity to 1', () => {
    cart.add('id-3');

    expect(cart._items['id-3']).toBe(1);
  });

  it('should remove entry', () => {
    cart.remove('id-2');

    expect(cart.items).not.toHaveProperty('id-2');
  });

  it('should return total', () => {
    expect(cart.total(products)).toBe(50);
  });
});

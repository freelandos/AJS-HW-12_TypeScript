import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 2500);

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should return correct total cost', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.totalCost()).toBe(5400);
});

test('should return correct discounted total cost', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.discountedTotalCost(10)).toBe(4860);
});

test('should remove an item from the cart by id', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);
  
  expect(cart.items.length).toBe(3);
  
  cart.remove(1001);
  expect(cart.items.length).toBe(2);
});

test('removing an item from the cart with a non-existent id', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(album);
  cart.add(movie);
  
  expect(cart.items.length).toBe(3);
  
  cart.remove(2023);
  expect(cart.items.length).toBe(3);
});

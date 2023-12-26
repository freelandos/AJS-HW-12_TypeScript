import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new Movie class object should be added to cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1010, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 2500));

  expect(cart.items).toContainEqual({
    id: 1010,
    name: 'Мстители',
    ename: 'The Avengers',
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ],
    time: 137,
    price: 2500
  });
});

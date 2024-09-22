const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

/*TAREA 1*/
test('divide 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('divide 35 / 5 to equal 7', () => {
  expect(calculator.divide(35, 5)).toBe(7);
});

test('divide 24 * 3 to equal 72', () => {
  expect(calculator.multiply(24, 3)).toBe(72);
});

test('divide 18 * 4 to equal 72', () => {
  expect(calculator.multiply(18, 4)).toBe(72);
});

/*TAREA 3*/
describe('divide', () => { /* el describe se usa para agrupar pruebas relacionadas */
  it('muestra un error al dividir entre 0', () => { /*el it especifica lo que se desea comprobar*/
    expect( calculator.divide(10, 0)).toBeNaN();
  });
});

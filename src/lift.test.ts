import lift from './lift'
import isFunction from 'typed-is/lib/isFunction'
const array = [1, 2, 3, 4]

const check = (n, identity, product) => {
  let i = n
  let g = lift(identity)
  while (i > 0) {
    expect(isFunction( g)).toEqual(true)
    g = g(array)
    i -= 1
  }
  expect(Array.isArray(g)).toBeTruthy()
  expect(g).toEqual(product)
}

describe('lift', () => {
  test('returns the cartesian product for arity = 1', () => {
    const identity = a => [a]
    const product = [[1], [2], [3], [4]]
    check(1, identity, product)
  })

  test('returns the cartesian product for arity = 2', () => {
    const identity = (a, b) => [a, b]
    let product:any[] = []
    for (const a of array) {
      for (const b of array) {
        product.push([a, b])
      }
    }
    check(2, identity, product)
  })

  test('returns the cartesian product for arity = 3', () => {
    const identity = (a, b, c) => [a, b, c]
    let product:any[] = []
    for (const a of array) {
      for (const b of array) {
        for (const c of array) {
          product.push([a, b, c])
        }
      }
    }
    check(3, identity, product)
  })

  test('returns the cartesian product for arity = 4', () => {
    const identity = (a, b, c, d) => [a, b, c, d]
    let product:any[] = []
    for (const a of array) {
      for (const b of array) {
        for (const c of array) {
          for (const d of array) {
            product.push([a, b, c, d])
          }
        }
      }
    }
    check(4, identity, product)
  })

  test('returns the cartesian product for arity = 5', () => {
    const identity = (a, b, c, d, e) => [a, b, c, d, e]
    let product:any[] = []
    for (const a of array) {
      for (const b of array) {
        for (const c of array) {
          for (const d of array) {
            for (const e of array) {
              product.push([a, b, c, d, e])
            }
          }
        }
      }
    }
    check(5, identity, product)
  })
})

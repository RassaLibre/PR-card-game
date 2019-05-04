import getCardsTotalPrice from './getCardsTotalPrice'

describe('getCardsTotalPrice', () => {

  const CARD = { price: 12, discount: 5, tax: 2 }

  it('should calculate the price correctly', () => {
    expect(getCardsTotalPrice(CARD)).toBe(9)
  })

})

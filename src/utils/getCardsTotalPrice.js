const getCardsTotalPrice = ({ price = 0, discount = 0, tax = 0 }) => price - discount + tax

export default getCardsTotalPrice

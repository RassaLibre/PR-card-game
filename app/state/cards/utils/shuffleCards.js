import {
  getRandomIntBetween
} from '../../../utils'

const shuffleCards = deck => {
  for(let i = 0; i < 5000; i++){
    let pos1 = getRandomIntBetween(0, deck.length);
    let pos2 = getRandomIntBetween(0, deck.length);
    let temp = deck[pos1];
    deck[pos1] = deck[pos2];
    deck[pos2] = temp;
  }
  return [ ...deck ];
}

export default shuffleCards

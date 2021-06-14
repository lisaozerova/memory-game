import { getRandomNumber } from '@/utils/getRandomNumber';

const complimentList = [
  'awesome',
  'gorgeous',
  'amazing',
  'striking',
  'brilliant',
  'stunning',
  'impressive',
  'overwhelming',
  'the best',
  'cool',
  'great',
  'perfect',
  'really good',
  'lovely',
  'splendid',
  'wonderful',
];

export const getCompliment = () => complimentList[getRandomNumber(0, complimentList.length)];


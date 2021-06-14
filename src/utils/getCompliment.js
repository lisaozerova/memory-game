import { getRandomNumber } from '@/utils/getRandomNumber';

const complimentList = [
  'amazing',
  'awesome',
  'brilliant',
  'cool',
  'gorgeous',
  'great',
  'impressive',
  'lovely',
  'overwhelming',
  'perfect',
  'really good',
  'splendid',
  'striking',
  'stunning',
  'the best',
  'wonderful',
];

export const getCompliment = () => complimentList[getRandomNumber(0, complimentList.length)];


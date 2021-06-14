import { computed } from 'vue';

import { GAME_SPEED } from '@/constants';
import FieldStatus from '@/enums/FieldStatus';
import GameStatus from '@/enums/GameStatus';
import { getRandomNumber } from '@/utils/getRandomNumber';

export default (init, fields, difficulty, cellsAmount, gameStatus) => {
  const start = () => {
    init();
    prepareGame();
  };

  const prepareGame = () => {
    gameStatus.value = GameStatus.PREVIEW;

    for (let i = 0; i < difficulty.value; i++) {
      const index = getRandomNumber(0, cellsAmount - 1);

      if (fields.value[index].value !== FieldStatus.FILLED) {
        fields.value[index].value = FieldStatus.FILLED;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      gameStatus.value = GameStatus.STARTED;
    }, GAME_SPEED);
  };

  const canStartGame = computed(() => {
    const isNotPreview = gameStatus.value !== GameStatus.PREVIEW;
    const isNotWin = gameStatus.value !== GameStatus.WIN;

    return isNotPreview && isNotWin;
  });

  return {
    start,
    canStartGame,
  }
};

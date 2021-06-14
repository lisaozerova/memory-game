import { computed, nextTick } from 'vue';

import { GAME_SPEED } from '@/constants';
import Difficalty from '@/enums/Difficalty';
import GameStatus from '@/enums/GameStatus';
import FieldStatus from '@/enums/FieldStatus';
import { getCompliment } from '@/utils/getCompliment';

export default (fields, gameStatus, difficulty, start) => {
  const selectCell = (id) => {
    const index = fields.value.findIndex(field => {
      return field.id === id;
    });

    if (index !== -1 && !fields.value[index].clicked) {
      fields.value[index].clicked = true;
      checkCell();
    }
  };

  const checkCell = () => {
    const errorIndex = fields.value.findIndex(field => (field.clicked && field.value === FieldStatus.EMPTY));

    if (errorIndex !== -1) {
      setGameOver();
      return;
    }

    const notFoundCellIndex = fields.value.findIndex(field => (!field.clicked && field.value === FieldStatus.FILLED));

    if (notFoundCellIndex === -1) {
      setGameWon();
    }
  };

  const setGameOver = () => {
    gameStatus.value = GameStatus.FAILED;
    difficulty.value = Difficalty.DEFAULT;
  };

  const setGameWon = () => {
    gameStatus.value = GameStatus.WIN;
    getCompliment();

    setTimeout(async () => {
      difficulty.value += 1;
      await nextTick();
      start();
    }, GAME_SPEED);
  };

  const isFail = computed(() => gameStatus.value === GameStatus.FAILED);
  const isWin = computed(() => gameStatus.value === GameStatus.WIN);

  return {
    getCompliment,
    isFail,
    isWin,
    selectCell,
  }
};

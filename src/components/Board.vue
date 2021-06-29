<template>
  <div class="wrapper">
    <div class="board">
      <BoardCell
        v-for="field in fields"
        v-bind:game-status="gameStatus"
        v-bind:field="field"
        v-bind:key="`cell-${field.id}`"
        v-on:selectCell="selectCell($event)"
      />
    </div>

    <p class="difficulty">Difficulty: <strong>{{ difficulty }}</strong></p>
    <p class="win" v-if="isWin">Win, you're {{ getCompliment() }}! Continue!</p>
    <p class="fail" v-if="isFail">You lose, try again!</p>

    <button class="btn" v-bind:disabled="!canStartGame" v-on:click="start">Play</button>
  </div>
</template>

<script>
import { ref } from 'vue';

import useGameInit from '@/composables/useGameInit';
import useGameProcess from '@/composables/useGameProcess';
import useGameStart from '@/composables/useGameStart';
import { CELLS_AMOUNT } from '@/constants';
import GameStatus from '@/enums/GameStatus';
import BoardCell from './BoardCell';

export default {
  name: 'Board',
  components: {
    BoardCell,
  },
  setup() {
    const gameStatus = ref(GameStatus.NONE);

    const { difficulty, fields, init } = useGameInit(CELLS_AMOUNT);
    const { canStartGame, start } = useGameStart(init, fields, difficulty, CELLS_AMOUNT, gameStatus);
    const {
      getCompliment,
      isFail,
      isWin,
      selectCell,
    } = useGameProcess(fields, gameStatus, difficulty, start);

    return {
      difficulty,
      fields,
      gameStatus,
      GameStatus,
      init,
      isFail,
      isWin,
      canStartGame,
      getCompliment,
      selectCell,
      start,
    }
  },
}
</script>

<style scoped>
.board {
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  width: 400px;
}

.btn {
  background-color: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 10px;
  color: #382b22;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  outline: none;
  padding: 10px 30px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background-color 150ms cubic-bezier(0, 0, 0.58, 1);
  vertical-align: middle;
}

.btn::before {
  background-color: #f9c4d2;
  border-radius: inherit;
  bottom: 0;
  box-shadow: 0 0 0 2px #b18597;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  width: 100%;
}

.btn:hover {
  background-color: #ffe9e9;
  transform: translate(0, 0.25em);
}

.btn:hover::before {
  box-shadow: 0 0 0 2px #b18597;
  transform: translate3d(0, 0.5em, -1em);
}

.btn:active {
  background: #ffe9e9;
  transform: translate(0em, 0.75em);
}

.btn:active::before {
  box-shadow: 0 0 0 2px #b18597;
  transform: translate3d(0, 0, -1em);
}

.btn:disabled {
  background-color: #aaa;
  border: 2px solid #424242;
  cursor: auto;
}

.btn:disabled::before {
  background-color: #525252;
  box-shadow: 0 0 0 2px #424242;
}

.wrapper {
  margin-bottom: 100px;
}
</style>

<template>
  <div class="wrapper">
    <div class="board">
      <BoardCell v-for="i in 36" v-bind:key="'cell-' + i" />
    </div>

    <p class="difficulty">Difficulty: <strong>{{ difficulty }}</strong></p>

    <button class="btn">Play</button>
  </div>
</template>

<script>
import { ref } from 'vue';

import BoardCell from './BoardCell';

export default {
  name: 'Board',
  components: {
    BoardCell,
  },
  setup() {
    const difficulty = ref(3);

    return {
      difficulty,
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
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 10px 30px;
  background-color: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background-color 150ms cubic-bezier(0, 0, 0.58, 1);
}

.btn::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9c4d2;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #b18597;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
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

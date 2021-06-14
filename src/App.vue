<template>
  <h1>Hi, Michail! Let's play a memory game.</h1>
  <p>Remember and open all blue cells</p>

  <Board />
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',
  components: {
    Board,
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  margin-top: 22px;
  text-align: center;
}

body {
  animation: gradient 15s ease infinite;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

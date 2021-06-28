<template>
  <Heading v-bind:level="1">
    <p>Hi, Michail!</p>
    <p>Let's play a memory game.</p>
  </Heading>
  <Heading v-bind:level="2">
    Remember and open all blue cells
  </Heading>

  <Board />
</template>

<script>
import Board from '@/components/Board';
import Heading from '@/components/Heading';

export default {
  name: 'App',
  components: {
    Board,
    Heading,
  },
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

h1 {
  font-size: 25px;
  line-height: 25px;
}

h2 {
  font-size: 20px;
  font-weight: normal;
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

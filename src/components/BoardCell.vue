<template>
  <span v-bind:class="'cell ' + (field.value === 1 ? 'cell--active' : '')" />
</template>

<script>
export default {
  name: 'BoardCell',
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.cell {
  background-color: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  margin: 5px;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  width: 50px;
}

.cell--active {
  background-color: #80afffff;
  background-image: url('../../public/images/twinkles.gif');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transform: rotateX(180deg);
}
</style>

<template>
  <span v-bind:class="getBoardCellClassNames" v-on:click="selectCell(field.id)" />
</template>

<script>
import { computed } from 'vue';

import FieldStatus from '@/enums/FieldStatus';
import GameStatus from '@/enums/GameStatus';

export default {
  name: 'BoardCell',
  props: {
    field: {
      type: Object,
      required: true,
    },
    gameStatus: {
      type: Number,
      required: true,
      default: GameStatus.NONE,
    }
  },

  setup(props) {
    const getBoardCellClassNames = computed(() => {
      const isGameStatusPreview = props.gameStatus === GameStatus.PREVIEW;
      const isFieldFilled = props.field.value === FieldStatus.FILLED;
      const isFieldEmpty = props.field.value === FieldStatus.EMPTY;
      const isCellChecked = props.field.clicked;
      const shouldShowActiveCell = (isGameStatusPreview && isFieldFilled) || (isCellChecked && isFieldFilled);
      const shouldShowErrorCell = isCellChecked && isFieldEmpty;

      return `cell ${shouldShowActiveCell && 'cell--active'} ${shouldShowErrorCell && 'cell--error'}`;
    });

    return {
      getBoardCellClassNames,
    }
  },

  methods: {
    selectCell(id) {
      if (this.gameStatus === GameStatus.STARTED) {
        this.$emit('selectCell', id);
      }
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

.cell--error {
  background-color: #ff6969;
  transform: rotateX(180deg);
}
</style>

import { onBeforeMount, ref, watch } from 'vue';

import Difficalty from '@/enums/Difficalty';
import FieldStatus from '@/enums/FieldStatus';

export default (cellsAmount) => {
  let difficulty = ref(Difficalty.DEFAULT);
  let fields = ref([]);

  const init = () => {
    fields.value = [];

    for (let i = 0; i < cellsAmount; i++) {
      fields.value.push({
        id: i,
        clicked: false,
        value: FieldStatus.EMPTY,
      })
    }
  };

  watch(difficulty, () => {
    if (difficulty.value > Difficalty.MAX) {
      difficulty.value = Difficalty.MAX;
    }
  });

  onBeforeMount(init);

  return {
    difficulty,
    fields,
    init,
  }
};

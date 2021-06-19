<script>
import { h } from 'vue';

export default {
  name: 'Heading',
  render: function () {
    return h(
      'h' + this.level,
      this.$slots.default(),
    )
  },
  props: {
    level: {
      type: Number,
      required: true,
    }
  }
}
</script>

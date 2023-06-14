<template>
  <input
    type="text"
    ref="input"
    class="h-20 w-96 rounded border-2 border-stone-600 px-5 text-2xl outline-none focus:bg-stone-50"
    @blur="handleBlur"
    @focus="handleFocus"
    :placeholder="offsetHeight"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Input",
  props: {
    inputType: {
      type: String,
      default: "letter",
    },
    last: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      offsetHeight: null,
    };
  },
  mounted() {
    let { bottom } = this.$refs.input.getBoundingClientRect();
    this.offsetHeight = bottom;
  },
  methods: {
    ...mapActions(["activeLetterInput", "activeNumberInput", "inactiveInput"]),

    handleFocus() {
      switch (this.inputType) {
        case "letter":
          this.activeLetterInput({ offset: this.offsetHeight });
          break;
        case "number":
          this.activeNumberInput({ offset: this.offsetHeight });
          break;
      }
    },
    handleBlur() {
      this.inactiveInput({
        element: this.$refs.input,
        isLast: this.last,
      });
    },
  },
};
</script>

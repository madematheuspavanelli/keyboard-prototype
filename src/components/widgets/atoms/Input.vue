<template>
  <input
    type="text"
    ref="input"
    class="border-2 h-20 w-96 px-5 text-2xl rounded outline-none focus:bg-stone-50 border-stone-600"
    @blur="handleBlur"
    @focus="handleFocus"
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
      default: false,
    },
  },
  methods: {
    ...mapActions(["activeLetterInput", "activeNumberInput", "inactiveInput"]),
    handleFocus() {
      switch (this.inputType) {
        case "letter":
          this.activeLetterInput(this.$refs.input);
          break;
        case "number":
          this.activeNumberInput(this.$refs.input);
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

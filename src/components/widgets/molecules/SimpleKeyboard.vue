<template>
  <div
    class="absolute bottom-0 left-0 right-0 transition"
    :class="{ 'translate-y-full': !showKeyboard }"
  >
    <div ref="keyboard" :class="keyboardClass"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
    input: {
      type: String,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  computed: {
    ...mapGetters(["showKeyboard"]),
  },
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
    });
    this.updateKeyboardHeight();
  },
  methods: {
    ...mapActions(["setKeyboardHeight"]),
    updateKeyboardHeight() {
      const { y: offsetTop } = this.$refs.keyboard.getBoundingClientRect();
      this.setKeyboardHeight(offsetTop);
    },
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      });
    },
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    },
    showKeyboard() {
      setTimeout(() => {
        this.updateKeyboardHeight();
      }, 0);
    },
  },
};
</script>

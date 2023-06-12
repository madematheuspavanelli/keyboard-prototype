<template>
  <div
    ref="keyboard"
    class="absolute bottom-0 left-0 right-0 transition"
    :class="{ 'translate-y-full': !showKeyboard }"
  >
    <img :src="keyboard" alt="" class="bg-stone-50" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import keyboardLetter from "../../../assets/images/keyboard.png";
import keyboardNumber from "../../../assets/images/keyboard-number.png";

export default {
  name: "Keyboard",
  data() {
    return {
      letter: keyboardLetter,
      number: keyboardNumber,
    };
  },
  computed: {
    ...mapGetters(["showKeyboard", "keyboardType"]),
    keyboard() {
      switch (this.keyboardType) {
        case "number":
          return this.number;
        case "letter":
        default:
          return this.letter;
      }
    },
  },
  methods: {
    ...mapActions(["setKeyboardHeight"]),
  },
  mounted() {
    const { offsetTop } = this.$refs.keyboard;
    this.setKeyboardHeight(offsetTop);
  },
  watch: {
    showKeyboard() {
      setTimeout(() => {
        const { offsetTop } = this.$refs.keyboard;
        this.setKeyboardHeight(offsetTop);
      }, 0);
    },
  },
};
</script>

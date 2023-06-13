<template>
  <div>
    <input
      :value="input"
      class="input w-96 rounded border-2 border-stone-700 p-4 text-xl"
      @input="onInputChange"
      @blur="handleBlur"
      @focus="handleFocus"
      placeholder="Tap on the virtual keyboard to start"
    />
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="input"
      :show="showKeyboard"
    />
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard.vue";

export default {
  name: "InputKeyboard",
  components: {
    SimpleKeyboard,
    SimpleKeyboard,
  },
  data: () => ({
    input: "",
    showKeyboard: false,
  }),
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
    handleFocus() {
      this.showKeyboard = true;
    },
    handleBlur() {
      this.showKeyboard = false;
    },
  },
};
</script>

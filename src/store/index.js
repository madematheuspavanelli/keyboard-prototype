import { createStore } from "vuex";
import { getKeyboardOffset } from "../utils/keyboardOffset";

const MINIMAL_KEYBOARD_INPUT_DISTANCE = 20;

export const store = createStore({
  state() {
    return {
      inputActive: false,
      keyboardType: null,
      keyboardHeight: null,
      selectedInputHeightOffset: null,
      currentOffset: 0,
    };
  },
  getters: {
    showKeyboard(state) {
      return state.inputActive;
    },
    keyboardType(state) {
      return state.keyboardType;
    },
    verticalOffset(state) {
      return state.currentOffset;
    },
  },
  mutations: {
    updateInput(state, payload) {
      const { isActive, type, inputHeightOffset } = payload;
      state.keyboardType = type;
      state.inputActive = isActive;
      state.selectedInputHeightOffset = inputHeightOffset;
    },
    setKeyboardHeight(state, payload) {
      state.keyboardHeight = payload;
    },
    updateKeyboardOffset(state) {
      const keyboardCoversInput =
        state.keyboardHeight <
        state.selectedInputHeightOffset +
          MINIMAL_KEYBOARD_INPUT_DISTANCE +
          state.currentOffset;

      if (keyboardCoversInput) {
        const offset =
          state.selectedInputHeightOffset -
          state.keyboardHeight +
          MINIMAL_KEYBOARD_INPUT_DISTANCE +
          state.currentOffset;

        state.currentOffset = offset;
        return;
      }

      state.currentOffset = 0;
    },
  },
  actions: {
    setKeyboardHeight({ commit }, height) {
      commit("setKeyboardHeight", height);
    },
    activeLetterInput({ commit }, element) {
      const { bottom } = element.getBoundingClientRect();
      const inputHeightOffset = bottom;

      commit("updateInput", {
        isActive: true,
        type: "letter",
        inputHeightOffset,
      });
      commit("updateKeyboardOffset");
    },
    activeNumberInput({ commit }, element) {
      const { bottom } = element.getBoundingClientRect();
      const inputHeightOffset = bottom;

      commit("updateInput", {
        isActive: true,
        type: "number",
        inputHeightOffset,
      });
      commit("updateKeyboardOffset");
    },
    inactiveInput({ commit }, element) {
      const { bottom } = element.getBoundingClientRect();
      const inputHeightOffset = bottom;

      commit("updateInput", {
        isActive: false,
        type: "",
        inputHeightOffset,
      });
    },
  },
});

const KEYBOARD_INPUT_MINIMAL_DISTANCE = 20;

export function getKeyboardOffset(keyboardHeight, inputHeight) {
  const keyboardCoversInput =
    keyboardHeight < inputHeight + KEYBOARD_INPUT_MINIMAL_DISTANCE;

  if (keyboardCoversInput) {
    return inputHeight - keyboardHeight + KEYBOARD_INPUT_MINIMAL_DISTANCE;
  }

  return 0;
}

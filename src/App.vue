<template>
  <Layout>
    <div
      class="flex h-full items-start p-4 transition"
      :style="{ transform: `translateY(-${verticalOffset}px)` }"
    >
      <!-- <Form /> -->
      <InputKeyboard />
    </div>

    <Keyboard />
  </Layout>
</template>

<script>
import { mapGetters } from "vuex";
import Layout from "./components/layouts/Default.vue";
import Input from "./components/widgets/atoms/Input.vue";
import Keyboard from "./components/widgets/molecules/Keyboard.vue";
import InputKeyboard from "./components/widgets/molecules/InputKeyboard.vue";
import Form from "./components/widgets/organisms/Form.vue";

export default {
  name: "App",
  components: {
    Layout,
    Input,
    Keyboard,
    InputKeyboard,
    Form,
    InputKeyboard,
  },
  computed: {
    ...mapGetters(["verticalOffset"]),
  },
};
</script>

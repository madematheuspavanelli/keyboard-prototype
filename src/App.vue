<template>
  <Layout>
    <div
      class="flex h-full items-start p-4 transition"
      :style="{ transform: `translateY(-${verticalOffset}px)` }"
    >
      <div class="mx-auto mt-40">
        <Form />
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapGetters } from "vuex";
import Layout from "./components/layouts/Default.vue";
import Input from "./components/widgets/atoms/Input.vue";
import Keyboard from "./components/widgets/molecules/Keyboard.vue";
import Form from "./components/widgets/organisms/Form.vue";

export default {
  name: "App",
  components: {
    Layout,
    Input,
    Keyboard,
    Form,
  },
  computed: {
    ...mapGetters(["verticalOffset"]),
  },
};
</script>

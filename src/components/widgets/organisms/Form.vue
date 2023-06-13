<template>
  <form class="mx-auto grid grid-cols-2 gap-8">
    <Input placeholder="Name" />
    <Input placeholder="Value" inputType="number" />
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
    <Input last />
  </form>
</template>

<script>
import Input from "../atoms/Input.vue";

export default {
  name: "Form",
  components: {
    Input,
  },
  methods: {
    handleExitForm() {
      console.log("handleExitForm");
    },
  },
};
</script>

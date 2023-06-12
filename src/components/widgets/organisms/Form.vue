<template>
  <div class="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
    <Input placeholder="Name" />
    <Input placeholder="Value" inputType="number" />
    <Input />
    <Input />
    <Input />
    <Input />
  </div>
</template>

<script>
import Input from "../atoms/Input.vue";

export default {
  name: "Form",
  components: {
    Input,
  },
};
</script>

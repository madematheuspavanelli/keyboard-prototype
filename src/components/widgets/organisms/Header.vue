<template>
  <div class="p-4 flex items-center justify-between">
    <button>&larr;</button>
    <h2>
      Page Title <span>{{ verticalOffset }}</span>
    </h2>

    <button>&rarr;</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["verticalOffset"]),
  },
};
</script>

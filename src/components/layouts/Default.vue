<template>
  <div class="flex h-screen max-h-screen flex-col overflow-hidden">
    <Header></Header>
    <main class="flex-1 overflow-y-scroll bg-gray-50">
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../widgets/organisms/Header.vue";
import Footer from "../widgets/organisms/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>

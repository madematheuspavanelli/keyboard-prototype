<template>
  <div class="h-screen max-h-screen flex flex-col overflow-hidden">
    <Header></Header>
    <main class="bg-gray-50 flex-1 overflow-y-scroll">
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

<template>
  <div class="home">
    <sidebar />
    <div class="content">
      <div class="search-header">
        <headerSection />
      </div>
      <div class="search-input">
        <searchInput @onSubmit="gotoResults" />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import searchInput from "@/components/searchInput.vue";
import headerSection from "@/components/headerSection.vue";

export default {
  name: "Home",
  components: {
    sidebar,
    searchInput,
    headerSection,
  },
  methods: {
    gotoResults(inputData) {
      this.$router.push({
        name: "Results",
        params: {
          inputData: inputData,
        },
      });
    },
  },
};
</script>
<style scoped>
.content {
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 170px;
  margin-left: 250px;
}
.search-input {
  margin-top: 30px;
}
.home {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}
</style>

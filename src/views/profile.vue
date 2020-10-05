<template>
  <div class="profileP">
      <sidebar/>
        <h4>PROFILE PAGE</h4>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
export default {
    name:"profile",
    components: {
        sidebar
    }
}
</script>

<style scoped>
.profileP h4{
    text-align: center;
}
</style>
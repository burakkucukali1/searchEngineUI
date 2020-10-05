<template>
  <div class="searchInput">
    <div class="inputBox">
      <i class="fas fa-search"> </i>
      <input
        v-on:keyup.enter="submit"
        class="field"
        type="text"
        placeholder="   Search.."
        v-model="inputData"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "searchInput",
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    submit() {
      this.$emit('onSubmit',this.inputData)
    },
  },
};
</script>

<style>
.inputBox {
  width: 600px;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
}
.inputBox > i {
  font-size: 20px;
  color: #c4c4c4;
}
.inputBox > input {
  font-size: 1.2em;
  background-color: #e5e5e5;
  color: #c4c4c4;
}
.inputBox > input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
}
</style>
<template>
  <div class="orderbyDropdown">
    <div class="dropdownClass">
      <a @click="isActive = !isActive"
        ><i class="fas fa-sort-amount-down"></i> Order By</a
      >
    </div>
    <div v-if="isActive" class="dropdown">
      <li v-for="(item, index) in dropdownList" :key="index">
        <a @click="clickedItem(index)">{{ item }}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderbyDropdown",
  data() {
    return {
      isActive: false,
      dropdownList: ["İsme Göre Sırala", "Tarihe Göre Sırala"],
    };
  },
  methods: {
    clickedItem(index) {
      this.$emit("selectedId", index);
      this.isActive=false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  width: 200px;
  height: 100px;
  background-color: #c4c4c4;
  position: absolute;
  z-index: 1;
  left: 81vw;
  border-radius: 10px;
  text-align: center;
}

.dropdown a {
  cursor: pointer;
  text-decoration: none;
  outline: none;
  color: black;
  font-size: 0.6em;
}
.dropdownClass {
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
</style>
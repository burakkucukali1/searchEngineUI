<template>
  <div class="resultCard">
    <div class="content-header">
      <h4>{{ index }}. {{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="content-date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: "resultCard",
  props: ["index","title","description", "date"],
};
</script>

<style>
.resultCard {
  width: 65vw;
  height: 90px;
  border-radius: 15px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  font-size: 1.2em;
  margin: 10px 0px 30px 0px;
}
.content-header {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 20px;
  flex-grow: 1;
  margin-right: 20px;
  padding-top: 30px;
}
.content-header p {
  margin-left: 20px;
}
.content-date {
  padding: 30px;
}
</style>
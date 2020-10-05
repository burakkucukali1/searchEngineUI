<template>
  <div v-if="totalPages" class="pagination-wrapper">
      <span v-if="showPreviousLink()" class="pagination-btn" @click="updatePage(currentPage-1)"> < </span>
 <li class="pageNumbers" @click="updatePage(index)" v-for="(item,index) in totalPages()" :key="index" >
          <a href="#">{{ index + 1 }}</a>
        </li>      <span v-if="showNextLink()" class="pagination-btn" @click="updatePage(currentPage +1)">></span>
  </div>
</template>

<script>
export default {
    name:"pagination",
    props: ['resultItems','currentPage','pageSize'],
    methods: {
        updatePage(pageNumber){
            this.$emit('page:update',pageNumber)
        },
        totalPages(){
           return Math.ceil(this.resultItems.length/this.pageSize);
        },
        showPreviousLink(){
            return this.currentPage==0?false:true;
        },
        showNextLink(){
        return this.currentPage==(this.totalPages()-1)? false: true;
        }
    }
}
</script>

<style scoped>
.pagination-wrapper{
float: left;
margin-top: 10px;
}
.pagination-btn {
    cursor:pointer;  
}
.pageNumbers{
    margin-left:4px;
    float: left;
}
.pageNumbers a {
cursor:pointer;
    outline: none;
    color: rgba(0,0,0,.6);
    font-weight: 700;
    text-decoration: none;
    font-size: 1.2em;
}
</style>
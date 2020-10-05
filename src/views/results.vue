<template>
  <div class="results">
    <sidebar />
    <div class="results-view">
  <div class="results-header">
      <div class="header-left">
        <div class="logo">
        <a href="/"><img src="../assets/tesodevLogo.jpg" alt=""></a>
        </div>
        <div class="header-title">
         TESODEV Search Console
        </div>
      </div>
      <div class="header-right">
        <resSearchInput
        @onSubmitres="updateResultItems"/>
      </div>
    </div>
    <div class="results-body">
      <div class="resultBody-header">
        <div>
          Search Results
        </div>
        <div>
          <orderbyDropdown
          @selectedId="sortingById"
          />
        </div>
      </div>
      <div class="cards">
      <resultCard v-for="(item,index) in visibleResults" :key="index"
      :index="item.id"
      :title="item.title"
      :description="item.description"
      :date="item.date"
      />
      </div>
    <div class="pagination">
      <pagination
      :resultItems="resultItems"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @page:update="updatePage"
      />
    </div>
    </div>
    </div> 
  </div>
</template>

<script>
import resSearchInput from "../components/resSearchInput";
import sidebar from "../components/sidebar";
import resultCard from "../components/resultCard";
import pagination from "../components/pagination";
import orderbyDropdown from "../components/orderbyDropdown";
export default {
  name: "results",
  data(){
    return{
      resultItems: this.$store.state.results,
      currentPage:0,
      pageSize:3,
      visibleResults: [],
      selectedId:null,
    }
  },
  components: {
    resSearchInput,
    sidebar,
    resultCard,
    pagination,
    orderbyDropdown
  },
  created(){
if(this.$route.params ){
  const input=this.$route.params.inputData
  this.resultItems=this.resultItems.filter((e)=>e.title.toLowerCase().includes(input.toLowerCase()))
}
  },
  beforeMount(){
    this.updateVisibleResults()
  },
  methods: {
    sortingById(index){
      this.selectedId=index
       if (this.selectedId==0) {
              this.resultItems.sort((a,b)=>a.title<b.title?-1:1)
              this.updateVisibleResults()            
      }else if(this.selectedId==1) {
            this.resultItems.sort((a,b)=>new Date(a.date) - new Date(b.date))
              this.updateVisibleResults()      
      }
    },
    updateResultItems(inputData){ 
      this.resultItems=this.$store.state.results
      this.resultItems=this.resultItems.filter((e)=>e.title.toLowerCase().includes(inputData.toLowerCase()))
      this.updateVisibleResults()
    },
    updatePage(pageNumber){
      this.currentPage=pageNumber;
      this.updateVisibleResults();
    },
    updateVisibleResults(){
      this.visibleResults = this.resultItems.slice(this.currentPage*this.pageSize,(this.currentPage*this.pageSize)+this.pageSize)
      if(this.visibleResults.length==0 && this.currentPage>0){
        this.updatePage(this.currentPage-1)
      }
    }
  }
};
</script>

<style scoped>
.resultBody-header{
  width:1200px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-left: 100px;
  margin-bottom: 40px;
  font-size: 1.8em;
  font-weight: 450;
  color: rgba(0, 0, 0, .7);
}
img {
  width: 150px;
  margin-top: 0.6em;
}
.cards{
  position: relative;
  left: 200px;
}
.results-header{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding: 25px;
}
.header-right{
  margin-top: 6.5em;
  margin-right: 5em;
}
.header-title{
  font-size: 2em;
  font-weight: 500;
  color:rgba(0, 0, 0, .6);
  margin-top:30px;
}
.sideSearch {
  width: 50px;
}
.results {
  display: grid;
  grid-template-columns: 1fr 15fr;
  height: 100vh;
  background-color: #fff;
}
.pagination {
  position: relative;
  left:76vw;
}
</style>
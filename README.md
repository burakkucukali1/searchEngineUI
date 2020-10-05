# # Search Engine UI (Test Case)
**Live Link:** [https://burakkucukali1.github.io/searchEngineUI/](https://burakkucukali1.github.io/searchEngineUI/)


### Features
<hr>
The project implements simple search engine features.

 - Listing results by search
 - Ordering results by name or date



### Used
<hr>

 - [Vue 2.6.11](https://github.com/vuejs/vue)
 - [Vue-Router 3.2.0](https://github.com/vuejs/vue-router)
 -  [Vuex 3.4.0](https://github.com/vuejs/vuex)
 - [Jest](https://github.com/facebook/jest)

 
 ### Props
 <hr>
 
 |Prop|Component|Parent Component|Description|
 |--|--|--|--|
 |resultItems|pagination|results|To calculate total page numbers
 |currentPage|pagination|results|Current page in the list
 |pageSize|pagination|results|The number of pages that should appear on each page
 |index|resultCard|results|Index of search results
 |title|resultCard|results|Title of results listed by search
 |description|resultCard|results|Description of results listed by search
 |date|resultCard|results|Date of results of listed by search

 ### Routes
 <hr>
 
  |Routes|Navigate To|
 |--|--|
 |/|Home.vue|
 |/results|results.vue|

 
 **Note:** 
To check search engine you can use these data: "Item", "Deneme", "Ktem", "Ztem", "Atem" 

### Build Setup
<hr>

   > #install dependencies
 
    npm install
>serve with hot reload at localhost:8080

    npm run dev
>build for production with minification

    npm run build
>run unit tests

    npm run unit:test

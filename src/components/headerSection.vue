<template>
   <div class="headerSection">
        <div class="logo">
          <a href="/"><img src="../assets/tesodevLogo.jpg" alt=""></a>
        </div>
        <div class="title">
            <h3>TESODEV Search Console</h3>
        </div>
        
      </div>
</template>

<script>
export default {
name: 'headerSection'
}
</script>

<style>
.headerSection {
  width:500px;
  height: 200px;
  display:flex;
  flex-direction: column;
align-items: center;

}
img{
  width: 15vw;
}
.title h3 {
  color: #696969;
  margin:1.5em;


}

</style>
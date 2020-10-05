<template>
<div>
  <div :class="isActive?activeClass:''" class="sidebar">  
    <div class="title">
      <div v-if="!isActive">
        Menu
      </div>
      <i @click="openSidebar" class="fas fa-bars" id="sidebar_btn"></i>
    </div>
    <div class="menu-items">
      <ul>
        <li>
          <router-link
            to="/"
            active-class="active"
            tag="a"
            class="side-btn"
          >
            <div  class="link-container"><i class="fas fa-home"></i><span class="shortSidebar">Home</span> </div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/profile"
            active-class="active"
            tag="a"
            class="side-btn"
          >
            <div class="link-container">
              <i class="fas fa-user"></i><span class="shortSidebar">Profile</span>
            </div>
          </router-link>
        </li>
        <li>
            <div class="link-container">
              <a href="mailto:burakkucukali6@gmail.com"><i class="fas fa-envelope"></i><span class="shortSidebar">Contact BK</span></a>
            </div>
        </li>
      </ul>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: "sidebar",
  data(){
    return {
      isActive:true,
      activeClass: 'is-active'
    }
  },
  methods: {
    openSidebar(){
      this.isActive==false?this.isActive=true:this.isActive=false
      console.log("active true")
    }
  }
};
</script>

<style scoped>

.sidebar {
  position: fixed;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #9999ff;
  transition: width 300ms ease-in-out;

}
.is-active{
  width: 4em;
}
.is-active .shortSidebar {
 display: none;
}
.is-active .link-container {
  position: relative;
top: 100px;
left: -1em;
height: 8em;
   transition: .4s;

}

.sidebar .title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.5em;
  color: white;
  text-align: center;
  line-height: 4em;

  user-select: none;
}
.sidebar ul a{
  display: block;
  height: 100%;
  widows: 100%;
  border: none;
  line-height: 5em;
  background: none;
  padding-left: 40px;
  text-decoration: none;
  color: #fff;
  /* border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #a3d8f4; */
  transition: .4s;
}
ul li:hover a {
  padding-left: 50px;
}
.sidebar ul a i {
  margin-right: 0.8em;
}
#check {
  display: none;
}
#sidebar_btn {
  z-index: 1;
  position: fixed;
  cursor: pointer;
  border-radius: 3px;
  left: 0.2em;
  top: 0.5em;
  font-size: 1.8rem;
  color: #fff;
  padding: 6px 12px;
  transition:0.5s;
  transition-property: color;
}

#sidebar_btn:hover {
  color:#c4c4c4
}
/* #check:checked ~ .sidebar{
 left: -190px;
} */

</style>
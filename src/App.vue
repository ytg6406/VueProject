<template>
  <div id="app">
      <navbar />
      <router-view></router-view>
  </div>
</template>
<script>
// export default {
//   name: 'app',
//   data () {
//     return {
      
//     }
//   }
// }
import navbar from "./components/navbar.vue"
export default {
  name: 'app',
  components : {navbar},
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>

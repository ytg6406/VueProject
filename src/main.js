/*jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//로그인 컴포넌트
const login = { template: `<div>Login Page</div>`}
const notFound = {template:'<div>Page Not Found</div>'}

//라우터 사용
const router = new VueRouter({
  // hash mode가 아닌 history 모드로 #이 안 붙게 설정을 할 수 있다.
  mode: 'history',
  routes : [
    {path : '/', component : App},
    {path : '/login', component : login},
    // path는 위에서 아래의 순서대로 들어가도록 되어 있다.
    {path : '*', component : notFound}
  ]
})

// 라우터 사용안하고 직접 구현하는 경우
// const routes = {
//   '/' : App,
//   '/login' : login
// }

// 기존 소스(vue-router 미사용시)
// new Vue({
//   el: '#app',
//   computed : {
//     VueComponent(){
//       console.log(1)
//       return routes[window.location.pathname] || notFound
//     }
//   }, 
//   render(h){
//     return h(this.VueComponent)
//   }
// })

new Vue({
  el: '#app',
  router, 
  render : h => h({template : '<router-view></router-view>'})
})

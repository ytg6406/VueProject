/*jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

// .vue 파일로 변경하면서 해당 부분은 제외해도 된다
// //로그인 컴포넌트
// const login = { template: `<div>Login Page</div>`}
// const notFound = {template:'<div>Page Not Found</div>'}

//라우터 사용
const router = new VueRouter({
  // hash mode가 아닌 history 모드로 #이 안 붙게 설정을 할 수 있다.
  mode: 'history',
  routes : [
    {path : '/', component : Home},
    {path : '/login', component : Login},
    // path는 위에서 아래의 순서대로 들어가도록 되어 있다.
    {path : '*', component : NotFound} 
  ]
})

export default router
<template>
    <div>
        Board.vue 파일이~~~다~~        
        <div>
            <div v-if="loading">Loading 중입니다...</div>
            <div v-else>
                bid : {{bid}}
                <router-link to="/b/2">Board2</router-link>
                <router-link to="/b/3">Board3</router-link>
                <router-link to="/b/${bid}/c/1">Card1</router-link>
                <router-link to="/b/${bid}/c/2">Card2</router-link>
            </div>
            <hr />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid :0,
            loading : false
        }
    },
    created(){
        this.fetchData()
        console.log(this.$route)
        console.log(this.$route.params.bid)
    },
    methods:{
        fetchData(){
            this.loading = true  
            setTimeout(()=>{
                this.bid = this.$route.params.bid
                this.loading = false  
            },500)          
        }
    }
}
</script>

<style>

</style>

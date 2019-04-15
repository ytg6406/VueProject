<template>
    <div>
        Board.vue 파일이~~~다~~        
        <div>
            bid : {{bid}}
            <router-link to="/b/2">Board2</router-link>
            <router-link to="/b/3">Board3</router-link>
            <router-link to="/b/${bid}/c/1">Card1</router-link>
            <router-link to="/b/${bid}/c/2">Card2</router-link>
            <hr />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bid :0
        }
    },
    created(){
        console.log(this.$route)
        console.log(this.$route.params.bid)
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>

<template>
    <div>
        card vue~~
        <div v-if="loading">loading~~card~~~</div>
        <div v-else>cid : {{cid}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cid: 0,
            loading : false
        }
    },
    watch:{
        // '$route'(){
        //     this.cid = this.$route.params.cid
        //     this.fetchData()
        // }
        $route:{
            handler:'fetchData',
            immediate : true     //바로 실행하는 방법이므로 아래의 created와 중복이 된다.
        }
    },
    // created(){
    //     console.log("card.vue")
    //     console.log(this.$route.params)
    //     this.fetchData()
    // },
    methods:{
        fetchData(){
            this.loading = true
            setTimeout(()=>{
                this.cid = this.$route.params.cid
                this.loading = false
            },500)
        }
    }
}
</script>

<style>

</style>

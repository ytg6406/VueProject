<template>
    <div>
        card vue~~
        <div>cid : {{cid}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cid: 0
        }
    },
    watch:{
        '$route'(){
            this.cid = this.$route.params.cid
        }
    },
    created(){
        console.log("card.vue")
        console.log(this.$route.params)
        this.cid = this.$route.params.cid
    }
}
</script>

<style>

</style>

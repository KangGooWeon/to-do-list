<template>
    <div class="clearAllComtainer">
        <span class="clearAllBtn" @click="clearTodo">
            Clear All
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        clearTodo(){
            this.$store.commit('clearAllItems');
        }
    }
}
</script>

<style scoped>
.clearAllComtainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn{
    color: #ec2030;
    display: block;
}

</style>
<template>
    <div class="inputBox shadow">
        <input type="text" class="inputText" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <transition name="modal">
            <Modal v-if="showModal" @close="showModal = false">
                <template v-slot:header>
                    <h3>경고! <i class="closeModalBtn fas fa-times" 
                    @click="showModal = false"></i>
                    </h3>
                </template>
            </Modal>
        </transition>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
import { mapMutations } from 'vuex'

export default {
    components:{
        Modal,
    },
    data: () =>({
        newTodoItem : "",
        showModal: false,
    }),
    methods:{
        ...mapMutations(['addOneItem']), 
        addTodo(){
            if(this.newTodoItem !== ''){
                // this.$emit('addTodoItem',this.newTodoItem);
                this.addOneItem(this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        },
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}

.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}

.inputText{
    width: 80%;
    height: 80%;
}

.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn{
    color: white;
    vertical-align: middle;
}

.closeModalBtn{
    color: #42b983;
}

</style>

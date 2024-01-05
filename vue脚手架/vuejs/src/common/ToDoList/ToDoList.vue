<template>
  <div >
    <addInput :addClick="add"/>
    <todoList/>
    <bottomBar/>
  </div>
</template>

<script>
import addInput from './subCom/addInput.vue'
import todoList from './subCom/todoList'
import bottomBar from './subCom/bottomBar.vue'


export default {
  components:{
    addInput,
    todoList,
    bottomBar,
  },
  methods: {
    add(value) {
      console.log(value);
    
    },
  },
  data() {
    return {
      todo: [],
    }
  },
}
</script>

<style>

</style>
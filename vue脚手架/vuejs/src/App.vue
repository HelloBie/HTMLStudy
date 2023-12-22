<template>

<div>
  <toDoList/>
</div>
  
</template>

<script>
import toDoList from './common/ToDoList/ToDoList.vue'
export default {
    name:'App',
components:{toDoList},
data() {
    return {
        todo: []
    }
},
}
</script>

<style>

</style>
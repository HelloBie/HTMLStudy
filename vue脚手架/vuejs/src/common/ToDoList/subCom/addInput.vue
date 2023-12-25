<template>
  <div class="center">
    <input type="text" name="addInput" id="addinp" placeholder="按回车添加" v-model="addText" @keyup.enter="selfAddClick">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {

  data() {
    return {
      addText: ''
    }
  },
  methods: {
    selfAddClick() {
      // eslint-disable-next-line no-debugger
     console.log(this);
      this.$parent.$parent.todo.push({
        id: nanoid(),
        title: this.addText ? this.addText : "temp",
        select: false
      });
    },
  },
  props: [
    'addClick',
  ]
}
</script>

<style scoped>
.center {
  width: 100%;
  height: 50px;
  text-align: center;
  /* vertical-align: middle; */
  padding: 5px;
  margin: 0px;
}

#addinp {
  width: 100%;
  height: 100%;

  border: 1px solid gray;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
<template>
  <div class="bgd">
    <h2>name:{{nam}}</h2>
    <h2>address:{{ add }}</h2>
  </div>
</template>

<script>
export default {
  
    data() {
        return {
            name: 'hellBie',
            address: '长春'
        }
    },
    props:[
      'add',
      'nam'
    ]
}
</script>

<style>
.bgd {
    background-color: gray;
}
</style>
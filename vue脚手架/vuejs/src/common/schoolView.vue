<template>
  <div class="bgd">
    <h2>name:{{name}}</h2>
    <h2>address:{{ address }}</h2>
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
}
</script>

<style>
.bgd {
    background-color: gray;
}
</style>
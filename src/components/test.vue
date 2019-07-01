<template>
<div class="container">
      <img src="../assets/logo.png">
      <div>
        <HelloWorld msg="测试路由2"/>
      </div>
    </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: 'test',
    components: {
    HelloWorld,
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
.container {
  margin-top: 60px;
}
</style>

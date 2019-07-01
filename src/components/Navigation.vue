<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="2">
    <template slot="title">LAB</template>
   <router-link to="/"><el-menu-item index="2-1">主页</el-menu-item></router-link>
    <router-link to="/test"><el-menu-item index="2-2">分类</el-menu-item></router-link>
    <el-menu-item index="2-3">整理</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">LAB</template>
      <el-menu-item index="2-4-1">星火计划</el-menu-item>
      <el-menu-item index="2-4-2">创意工坊</el-menu-item>
      <el-menu-item index="2-4-3">加入我们</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="4"><a href="http://owwp.top/" target="_blank">BlackMoon</a></el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'Navigation',
 data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>
a {
    text-decoraction: none;
}


.router-link-active {
    text-decoration: none;
}
</style>

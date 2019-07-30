<template>
  <el-menu
    class="the-aside-menu"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
    :collapse="getIsCollapse"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Router</span>
      </template>
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{route.path}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script>
import { routes } from "@/router";

export default {
  data: function() {
    return {
      routes: routes,
      defaultOpeneds: ["1"]
    };
  },
  computed: {
    defaultActive: function() {
      return "/" + this.$route.path.split("/").reverse()[0];
    },
    getIsCollapse: function() {
      return this.$store.state.style.isCollapse;
    }
  }
};
</script>
<style>
.the-aside-menu {
  width: 250px;
}
</style>

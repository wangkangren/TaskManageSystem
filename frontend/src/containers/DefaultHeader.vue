<template>
  <el-row>
    <el-col>
      <el-button id="nav-button" @click="toggleCollapse" type="text" :icon="getIcon" plain></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: getBreadList}">{{getBreadList}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script>
import { routes } from "@/router";
export default {
  data: function() {
    return {
      routes: routes
    };
  },
  methods: {
    toggleCollapse: function() {
      this.$store.dispatch("toggleCollapse");
    }
  },
  computed: {
    getBreadList: function() {
      return this.$route.path;
    },
    getIcon: function() {
      return this.$store.state.style.isCollapse
        ? "el-icon-arrow-right"
        : "el-icon-arrow-left";
    }
  }
};
</script>
<style>
#nav-button {
  margin-right: 15px;
  display: inline-block;
}
</style>

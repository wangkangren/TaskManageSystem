<template>
  <el-container>
    <DefaultAside />
    <el-container>
      <el-header>
        <DefaultHeader />
      </el-header>
      <el-main>
        <DefaultMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import DefaultHeader from "./DefaultHeader";
import DefaultAside from "./DefaultAside";
import DefaultMain from "./DefaultMain";
export default {
  components: {
    DefaultHeader,
    DefaultAside,
    DefaultMain
  }
};
</script>

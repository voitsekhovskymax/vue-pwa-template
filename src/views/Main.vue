<style lang="less">

</style>
<template>
    <div class="main">
      <Header></Header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import Header from '@/components/header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      data: []
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
  created() {},
  dispatch() {}
};
</script>

<template>
  <div class="sky-late-task">
    <span
      v-if="loading"
      class="sky-late-task__loading"
    >正在加载...</span>
    <sky-chain
      v-if="!loading"
      :list="list"
    />
  </div>
</template>
<script>
import { list } from 'sky-engine/api'
import { MSGCT_MSG } from '@/api/apiModules'
export default {
  name: 'SkyLateTask',
  components: {
    'skyChain': () => import('sky-engine/views/chainController/chain')
  },
  data() {
    return {
      list: [],
      loading: false
    }
  },
  mounted() {
    this.fetch(true);
    this.setRefreshTimer(3000); // 启动定时刷新
  },
  methods: {
    fetch(needloading = false) {
      needloading && (this.loading = true);
      list(MSGCT_MSG, {
        page: 0,
        limit: 10
      }).then((result) => {
        this.list = result.data.content.itemArr
        needloading && (this.loading = false)
      }).catch((e) => {
        needloading && (this.loading = false)
        if (e) {
          throw e;
        }
      })
    },
    refresh() {
      this.fetch();
    }
  }
}
</script>
<style lang="scss">
@import "~sky-engine/assets/styles/common/var.scss";
@import "~sky-engine/assets/styles/mixin/mixin.scss";

@include b(late-task) {
  @include e(loading){
    display: block;
    text-align: center;
    font-style: italic;
    padding-top:20px;
  }
}
</style>

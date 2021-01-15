<template>
  <el-row
    :gutter="40"
    class="sky-about">
    <el-col :span="6">
      <img src="@/assets/images/about/about-logo.png">
      <img
        src="@/assets/images/login/wechat.png"
        class="sky-about__card">
    </el-col>
    <el-col :span="18">
      <div class="sky-about__title">{{ $t('rcoHost') }}</div>
      <div class="sky-about__subtitle">Ruijie Desktop Cloud</div>
      <div>{{ $t('about.version') }}：{{ version }}</div>
      <div>{{ $t('about.supports') }}</div>
      <div>{{ $t('about.resolution') }}</div>
      <div>{{ $t('about.bbs') }}：bbs.ruijie.com.cn</div>
      <div>{{ $t('about.hotline') }}：4008-111-000</div>
      <!-- <div>{{ $t('about.service') }}ID：{{ aboutInfo.supportId }}</div> -->
      <div>Version：#WarVersion#</div>
      <div class="sky-about__footer">{{ $t('rj') }}©2020</div>
    </el-col>
  </el-row>
</template>
<script>
import { Row, Col } from 'element-ui'
import { getAbout } from '@/api/navBar'
export default {
  name: 'About',
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      version: '9.0.0'
    }
  },
  mounted() {
    getAbout().then(response => {
      this.version = response.data.content.version;
    })
  }
}
</script>

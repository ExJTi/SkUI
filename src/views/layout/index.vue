<template>
  <div style="width:100%;height:100%">
    <sk-layout
      ref="layout"
      :items="items"
      :permission-routers="permission_routers"
      :sidebar="sidebar"
      menu-transition-name="el-zoom-in-custom-left"
      @click-navitem="handleClickNavItem"
      @toggle-sidebar="handleToggleSidebar"
    >
      <sky-progress-box/>
    </sk-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { SkLayout, SkIconStatus } from 'sk-ui';
import progressBox from 'sky-engine/components/progressBox';
import navItems from './navItems';
import lateTask from './lateTask';

import SkyChangePassword from '@/views/layout/changePassword.js';
import Locale from 'sk-ui/lib/mixins/locale';

export default {
  components: {
    [lateTask.name]: lateTask,
    [SkLayout.name]: SkLayout,
    [progressBox.name]: progressBox,
    [SkIconStatus.name]: SkIconStatus
  },
  mixins: [navItems, Locale],
  data() {
    return {
      items: [
        {
          label: 'welcome',
          icon: 'user',
          label1: '',
          show: false
        },
        {
          label: 'more',
          icon: 'more',
          show: false,
          menus: [
            {
              label: 'about',
              icon: 'info',
              action: 'about'
            },
            {
              label: 'logout',
              icon: 'power',
              action: 'logout'
            }
          ]
        },
        {
          label: 'taskLog',
          icon: 'task',
          action: 'taskLog'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['sidebar', 'name', 'permission_routers'])
  },
  mounted() {
    this.items[0].label1 = this.name;
  },

  methods: {
    handleChangePassword() {
      this.$dialog({
        template: (h) => {
          const tips = {
            label: 'terminal.hasFirstTimeLoggedInTips',
            type: 'warning'
          };
          return <sky-change-password tips={tips}></sky-change-password>;
        },
        components: {
          SkyChangePassword
        }, // 注入组件
        props: {
          title: this.t('terminal.modifyPassword'), // 标题
          width: '35%',
          showCancelBtn: false,
          showClose: false,
          closeOnPressEscape: false,
          closeOnHashChange: false
        }
      });
    },
    handleClickNavItem(item) {
      this.operate(item);
    },
    handleToggleSidebar() {
      this.$store.dispatch('toggleSideBar');
    },
    showTaskInfo() {
    }
  }
};
</script>
<style lang="scss">
@import "~sky-engine/assets/styles/common/var.scss";
@import "~sky-engine/assets/styles/mixin/mixin.scss";
</style>

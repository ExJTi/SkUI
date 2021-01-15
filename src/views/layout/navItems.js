// import { Notification } from 'element-ui'
import { SkDrawer } from 'sk-ui';
import about from './about';
import SkyChangePassword from './changePassword';
import lang from '@/lang';
import store from '@/store';

export default {
  mounted() {
    // this.fetchUnReadTask();
  },
  methods: {
    handleMouseEnter(item) {
      item.show = !item.show;
    },
    handleMouseLeave(item) {
      item.show = !item.show;
    },
    operate(item) {
      this[item.action] && this[item.action](item);
    },
    home() {
      this.$router.push({ path: '/' });
    },
    modifyPassword() {
      this.openChangePwsDialog({ view: 'changeAdminPws', title: lang.t('terminal.modifyPassword') });
    },
    openChangePwsDialog({ view, title }) {
      this.$dialog({
        template: (h) => {
          return <sky-change-password view={view}></sky-change-password>;
        },
        components: {
          SkyChangePassword
        }, // 注入组件
        props: {
          title: title, // 标题
          width: '35%'
        }
      });
    },
    modifyTerminalAdminPassword() {
      this.openChangePwsDialog({ view: 'changeTerminalPws', title: lang.t('terminal.modifyTerminalAdminPassword') });
    },
    refresh() {
      // this.fetchUnReadTask();
    },
    logout() {
      const skyLoadersLen = store.state.operate.skyLoaders.length;
      if (skyLoadersLen > 0) {
        this.$store.dispatch('OpenConfirm', {
          message: 'login.skyLoadersClearMsg'
        }).then(() => {
          this.$store.dispatch('RemoveSkyLoader', 'all');
          this.handleLogout();
        });
      } else {
        this.handleLogout();
      }
    },

    handleLogout() {
      this.$store.dispatch('LogOut').then(() => {
        // location.reload() // 为了重新实例化vue-router对象 避免bugq
        this.$router.push({
          path: '/login'
        });
      });
    },

    langSelect(item = {}) {
      this.$i18n.locale = item.lang;
      this.$store.dispatch('setLanguage', item.lang);
    },
    about() {
      this.$dialog({
        template: (h) => {
          return <about></about>;
        },
        components: { about },
        props: {
          title: this.$t('navbar.about'),
          width: '480px',
          showFooter: false
        }
      });
    },
    taskLog() {
      if (this.drawer) {
        this.drawer.close();
        this.drawer = null;
        return;
      }
      const self = this;
      this.drawer = SkDrawer({
        title: '最近任务',
        customClass: 'sky-late-task-drawer',
        content: <sky-late-task></sky-late-task>,
        onClose() {
          self.drawer = null;
        },
        onMore() {
          self.$router.push({ name: 'auditLogs', query: { activeName: 'historyTask' }});
        }
      });
    },
    serverProtocol() {
      window.open('#/server-protocol');
    }
  }
};

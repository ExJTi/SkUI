<template>
  <div class="sky-login">
    <div class="sky-login__header"/>
    <div class="sky-login__main">
      <div class="sky-login__form-content">
        <el-form
          ref="loginForm"
          :model="loginForm"
          class="sky-login__form">
          <div class="sky-login__form-header">
            <el-form-item class="sky-login__form-item">
              <div>
                <img
                  width="350"
                  height="50"
                  src="@/assets/images/rcdclogo.png"
                >
              </div>
            </el-form-item>
          </div>
          <div class="sky-login__form-body">
            <el-form-item
              :rules="userNameRules"
              prop="userName"
              class="sky-login__form-item"
              verify
            >
              <el-input
                v-model="loginForm.userName"
                :placeholder="$t('login.adminName')"
                name="userName"
                prefix-icon="sk-icon-username"
              />
            </el-form-item>
            <el-form-item
              :rules="passwordRules"
              prop="password"
              class="sky-login__form-item"
              verify
            >
              <el-input
                v-model="loginForm.password"
                :placeholder="$t('pwd')"
                type="password"
                name="password"
                prefix-icon="sk-icon-password"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                type="primary"
                class="sky-login__button"
                @click.native.prevent="handleLogin"
              >{{ $t('login.login') }}</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <div class="sky-login__bottom">
      <div class="sky-login__about">
        <div class="sky-login__about-left">
          <a
            target="_blank"
            class="sky-login__about-txt"
            href="https://www.sobot.com/chat/pc/index.html?sysNum=6a532efa9b3e4d2282e0dab4956d0f01&robotFlag=4"
          >{{ $t('login.online') }}</a>
          <span class="sky-login__about-txt" >
            {{ $t('login.hotline') }}
          </span>
          <span class="sky-login__about-txt" >
            {{ $t('login.rj') }}©2019
          </span>
        </div>
        <div class="sky-login__about-right">
          <a
            class="sky-login__about-txt"
            @click="handlerDownloadTemplate"
          >{{ $t('login.softTerminalDownload') }}</a>
          <el-popover
            :has-footer="false"
            placement="top-start"
            trigger="hover"
            width="100">
            <img
              class="sky-login__about-wechat"
              src="@/assets/images/login/wechat.png">
            <span
              slot="reference"
              class="sky-login__about-txt">{{ $t('login.wechat') }}</span>
          </el-popover>
        </div>
      </div>

      <sky-progress-box/>

    </div>
  </div>
</template>

<script>
import { on, off } from 'sk-ui/lib/utils/util';
import progressBox from 'sky-engine/components/progressBox';

import { Form, Popover, Input, Button } from 'element-ui';

export default {
  name: 'Login',
  components: {
    [Popover.name]: Popover,
    [Form.name]: Form,
    [Input.name]: Input,
    [Button.name]: Button,
    [progressBox.name]: progressBox
  },
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      loading: false,
      userNameRules: [{ notEmpty: this.$t('login.adminName') }, 'textName', 'textShort'],
      passwordRules: [{ notEmpty: this.$t('pwd') }]
    };
  },
  mounted() {
    this.$store.dispatch('CloseAllNotification');
    on(document, 'keydown', this.handleKeydown);
  },
  beforeDestroy() {
    off(document, 'keydown', this.handleKeydown);
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('LoginByUsername', this.loginForm)
            .then(() => {
              this.$router.push({ path: '/dashboard' });
            })
            .catch(e => {
              this.loading = false;
              throw e;
            });
        }
      });
    },
    handleKeydown(e) {
      const keyCode = e.keyCode;
      if (keyCode === 13 && !this.loading) {
        this.handleLogin();
      }
    },
    handlerDownloadTemplate() {
      this.$store.dispatch('DownLoadFile', {
        params: {
          fileName: this.$t('login.softTerminal')
        },
        module: 'rco/terminal/app/windows'
      });
    }
  }
};

</script>

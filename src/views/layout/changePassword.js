import { extend } from 'sk-ui/lib/utils/util.js';
import { isEmptyObj } from 'sky-engine/utils'

import sumPasswordForm from '@/store/modules/systemUserManage/metaData/passwordForm';
import { createViewVNode } from 'sky-engine/views/ViewManager'

import 'sky-engine/assets/styles/components/changePassword.scss'

export default {
  name: 'SkyChangePassword',
  components: {
    formController: () => import('sky-engine/views/formController/index.js')
  },
  data() {
    return {
      sumPasswordForm
    }
  },
  props: {
    view: {
      type: String,
      default: 'changeAdminPws'
    },
    tips: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  render(h) {
    const view = extend(true, {}, this.view === 'changeAdminPws' ? this.sumPasswordForm : this.vtPasswordForm);
    view.ref = 'formRef'
    const classes = ['sky-change-pws']
    if (!isEmptyObj(this.tips) && view) {
      classes.push('sky-change-pws--hasTips')
      view.toolbar = {
        tips: this.tips
      }
    }
    return <div class={classes.join(' ')} >{ createViewVNode(view, h)}</div>
  },
  methods: {
    handleOk() {
      return new Promise((resolve, rejece) => {
        this.$refs.formRef.ok().then(res => {
          if (this.view === 'changeAdminPws') {
            this.$store.dispatch('SetHasFirstTimeLoggedIn', false)
          }
          resolve()
        }).catch(e => {
          rejece()
          throw e;
        });
      })
    }
  }
}

